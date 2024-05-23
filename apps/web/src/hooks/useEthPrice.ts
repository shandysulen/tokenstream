import { useQuery } from "@tanstack/react-query";
import { getEthPrice } from "@/utils/coingecko";

/** Fetches ETH price every 60s, which is the CoinGecko data freshness rate */
export const useEthPrice = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ethPrice"],
    queryFn: getEthPrice,
    refetchInterval: 60_000,
  });

  return { data, isLoading, isError };
};
