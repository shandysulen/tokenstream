import { createPublicClient, http, PublicClient, Transport } from "viem";
import { mainnet } from "viem/chains";
import { env } from "@/env.mjs";

export class TokensClient {
  private client: PublicClient<Transport, typeof mainnet>;

  constructor() {
    this.client = createPublicClient({
      chain: mainnet,
      transport: http(env.MAINNET_RPC_URL),
    });
  }

  async getBlockNumber() {
    const blockNumber = await this.client.getBlockNumber();

    return Number(blockNumber);
  }
}
