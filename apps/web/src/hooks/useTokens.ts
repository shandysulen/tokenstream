import { trpc } from "@/app/_trpc/client";

export const useTokens = () => {
  const [tokens] = trpc.tokens.all.useSuspenseQuery(undefined, {
    refetchInterval: 5000,
  });

  return tokens;
};
