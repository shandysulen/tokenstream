export interface CoinGeckoReponse {
  "matic-network": {
    eth: number;
  };
}

/** Fetch the exchange rate for MATIC-ETH if we have Polygon collections */
export const fetchExchangeRate = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=eth",
    );

    const data = (await response.json()) as CoinGeckoReponse;

    return data["matic-network"].eth;
  } catch (err) {
    console.error(err);

    // throw new TRPCError({
    //   code: "INTERNAL_SERVER_ERROR",
    //   message: "Unable to fetch MATIC-ETH exchange rate",
    // });
  }
};
