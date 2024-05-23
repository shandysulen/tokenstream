import { env } from "@/env.mjs";
import { Socials } from "@/types/contract";
import { EtherscanSourceCodeResponse } from "@/types/etherscan";

export class EtherscanClient {
  private fetch: (params: Record<string, string>) => ReturnType<typeof fetch>;

  constructor() {
    this.fetch = (params) => {
      // Create URL
      const url = new URL("", "https://api.etherscan.io/api");
      url.searchParams.set("apikey", env.ETHERSCAN_API_KEY);

      // Set query params
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          // if (typeof value === "object") {
          //   value.forEach(
          //     (v) => url.searchParams.append(key, decodeURIComponent(v)), // Prevent double percent-encoding, url.searchParams will auto percent-encode
          //   );
          // } else {
          url.searchParams.append(key, value.toString()); // Prevent double percent-encoding, url.searchParams will auto percent-encode
          // }
        }
      });

      return fetch(url);
    };
  }

  /** Get contract source code for a specified `address`. */
  private async getContractSourceCode(address: string) {
    // Fetch from Etherscan API
    let response: Response;
    try {
      response = await this.fetch({
        module: "contract",
        action: "getsourcecode",
        address,
      });
    } catch (err) {
      console.error("getContractSourceCode: Unable to fetch source code.", err);

      return null;
    }

    // Ensure the response is valid
    if (!response.ok) {
      console.error("getContractSourceCode: Response not ok.", response);

      return null;
    }

    // Get data from response
    const data = (await response.json()) as EtherscanSourceCodeResponse;

    // Exit early if the response data is NOTOK
    if (data.status === "0") {
      console.error("getContractSourceCode: Data not ok.", data);

      return null;
    }

    // Return source code from data
    return data.result[0].SourceCode;
  }

  /** Get socials from contract source code data */
  async getContractSocials(address: string) {
    // Get contract source code
    const sourceCode = await this.getContractSourceCode(address);
    if (!sourceCode) {
      return null;
    }

    // Website
    const websiteRegex = /Website(.+)(https?:\/\/[^\s]+)/gi;
    const websiteMatches = sourceCode.match(websiteRegex);
    console.log("websiteMatches", websiteMatches);
    const website = websiteMatches?.length
      ? websiteMatches[0].split(" ")[1] // ["Website: ", "https://pepe.vip"]
      : null;

    // Telegram
    const telegramRegex = /https?:\/\/t.me\/[^\s]+/gi;
    const telegramMatches = sourceCode.match(telegramRegex);
    console.log("telegramMatches", telegramMatches);
    const telegram = telegramMatches?.length ? telegramMatches[0] : null;

    const socials: Socials = {
      website,
      telegram,
    };

    return socials;
  }
}
