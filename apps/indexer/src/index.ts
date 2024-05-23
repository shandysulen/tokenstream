import { createDbClient, NewDbToken, tokens } from "@tokenstream/db";
import { createPublicClient, erc20Abi, getContractAddress, http } from "viem";
import { mainnet } from "viem/chains";

const db = createDbClient();

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    "https://eth-mainnet.g.alchemy.com/v2/od-5_h-7L3nVoE30d4iQQn_hNiA-YCYe",
  ),
});

publicClient.watchBlocks({
  includeTransactions: true,
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  onBlock: async (block) => {
    console.log(`Block ${block.number}`);

    const contractCreationTxs = block.transactions.filter(
      (tx) => tx.to === null, // Contract creation txs have no `to` address
    );
    console.log(`Contract creation txs: ${contractCreationTxs.length}`);

    // Exit early if no contract creation txs
    if (contractCreationTxs.length === 0) {
      return;
    }

    for (let i = 0; i < contractCreationTxs.length; i++) {
      const tx = contractCreationTxs[i];

      // Get contract addresses from contract creation txs
      const deployer = tx.from;
      const address = getContractAddress({
        from: deployer,
        nonce: BigInt(tx.nonce),
      });

      // To confirm it's an ERC20 token, call the ERC20 read functions
      const results = await publicClient.multicall({
        contracts: [
          {
            abi: erc20Abi,
            address: address,
            functionName: "name", // optional
          },
          {
            abi: erc20Abi,
            address: address,
            functionName: "symbol", // optional
          },
          {
            abi: erc20Abi,
            address: address,
            functionName: "decimals", // optional
          },
          {
            abi: erc20Abi,
            address: address,
            functionName: "totalSupply",
          },
          // TODO call the other functions
        ],
      });

      // Exit early if not ERC20 (implementation guarantees type safety)
      if (
        results[0].status === "failure" ||
        results[1].status === "failure" ||
        results[2].status === "failure" ||
        results[3].status === "failure"
      ) {
        console.log(
          `Contract ${address} is NOT an ERC20 token OR unable to fetch token info`,
        ); // TODO: Make this more clear

        return;
      }

      // Extract results from the multicall
      const name = results[0].result;
      const symbol = results[1].result;
      const decimals = results[2].result;
      const totalSupply = results[3].result;

      // Logs
      const gasUnits = tx.gas;
      const gasPrice = tx.gasPrice;
      console.log(`Address: ${address}`);
      console.log(`Name: ${name}`);
      console.log(`Symbol: ${symbol}`);
      console.log(`Decimals: ${decimals}`);
      console.log(`Total supply: ${totalSupply}`);
      console.log(`Deployer: ${deployer}`);
      console.log(`Gas: ${gasUnits}`);
      console.log(`Gas price: ${gasPrice}`);

      // Compose object to insert into DB
      const token: NewDbToken = {
        chain: publicClient.chain.id,
        address: address,
        name,
        symbol,
        decimals: Number(decimals),
        totalSupply: totalSupply,
        deployer,
        deployedAt: new Date().toISOString(),
        gasUnits: gasUnits,
        gasPrice: gasPrice,
      };

      // Insert into DB
      try {
        await db.insert(tokens).values(token).run();
      } catch (err) {
        console.error("Unable to set token", err);
      }
    }
  },
  onError: (err) => {
    console.error("Unable to fetch new block", err);
  },
});
