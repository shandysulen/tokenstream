import { accounts } from "@tokenstream/db";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const accountRouter = router({
  addDeletedToken: protectedProcedure
    .input(z.string())
    .mutation(async ({ input: contract, ctx: { db, session } }) => {
      // const deletedTokens = await db
      //   .select({ deletedTokens: accounts.deletedTokens })
      //   .from(accounts)
      //   .where(eq(accounts.address, session.address))
      //   .get();

      // const parsedDeletedTokens = JSON.parse(
      //   deletedTokens.deletedTokens!,
      // ) as string[];

      // if (parsedDeletedTokens.includes(input)) {
      //   return;
      // }

      // parsedDeletedTokens.push(input);

      // await db
      //   .update(accounts)
      //   .set({ deletedTokens: JSON.stringify(parsedDeletedTokens) })
      //   .where(eq(accounts.address, session.address))
      //   .run();
      await db
        .update(accounts)
        .set({ deletedTokens: JSON.stringify([contract]) })
        .where(eq(accounts.address, session.address))
        .run();
    }),
  deletedTokens: protectedProcedure.query(async ({ ctx: { db, session } }) => {
    const result = await db
      .select({ deletedTokens: accounts.deletedTokens })
      .from(accounts)
      .where(eq(accounts.address, session.address))
      .get();

    console.log("result", result);

    const deletedTokens = JSON.parse(result.deletedTokens!) as string[];

    console.log("deletedTokens", deletedTokens);

    return deletedTokens;
  }),
});

export type AccountRouter = typeof accountRouter;
