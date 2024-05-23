import { router } from "../trpc";
import { accountRouter } from "./account";
import { tokensRouter } from "./tokens";

export const appRouter = router({
  account: accountRouter,
  tokens: tokensRouter,
});

export type AppRouter = typeof appRouter;
