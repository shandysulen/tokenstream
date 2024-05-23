import { tokens } from "@tokenstream/db";
import { desc } from "drizzle-orm";
import z from "zod";
import { EtherscanClient } from "../services/etherscan";
import { publicProcedure, router } from "../trpc";

export const tokensRouter = router({
  socials: publicProcedure.input(z.string()).query(({ input: address }) => {
    const etherscanClient = new EtherscanClient();
    const socials = etherscanClient.getContractSocials(address);

    return socials;
  }),
  all: publicProcedure.query(async ({ ctx: { db } }) => {
    const data = await db
      .select()
      .from(tokens)
      .orderBy(desc(tokens.deployedAt))
      .all();

    return data;
  }),
});

export type TokensRouter = typeof tokensRouter;
