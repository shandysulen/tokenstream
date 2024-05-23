/** Given `address`, compose the Etherscan address URL */
export const getEtherscanAddressUrl = (address: string) =>
  `https://etherscan.io/address/${address}`;

/** Given `block number`, compose the Etherscan block URL */
export const getEtherscanBlockUrl = (blockNumber: number) =>
  `https://etherscan.io/block/${blockNumber}`;
