import { Contract } from "@/types/contract";

export const getFormattedContract = (
  chain: number,
  address: string,
): Contract => {
  return `${chain}:${address}`;
};
