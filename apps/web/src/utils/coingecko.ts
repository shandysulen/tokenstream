import { CoinGeckoSimplePriceData } from "@/types/coingecko";

/** Gets USD price of ETH from CoinGecko. 60s data freshness. */
export const getEthPrice = async () => {
  console.log("setting eth price");
  let response: Response;
  try {
    response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    );
  } catch (error) {
    console.error(error);
    return null;
  }

  // Set error if response is NOT OK
  if (!response.ok) {
    console.error(response.statusText);
    return null;
  }

  // Extract and return data
  const priceData = (await response.json()) as CoinGeckoSimplePriceData;
  return priceData.ethereum.usd;
};
