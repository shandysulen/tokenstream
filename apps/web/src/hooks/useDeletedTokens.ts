import { trpc } from "@/app/_trpc/client";
import { noRefetch } from "@/constants/react-query";

export const useDeletedTokens = () => {
  const { data: deletedTokens } = trpc.account.deletedTokens.useQuery(
    undefined,
    {
      ...noRefetch,
    },
  );

  console.log("data", deletedTokens?.[1]);

  return deletedTokens;
};
