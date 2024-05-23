"use client";

import { ComponentPropsWithoutRef, useMemo } from "react";
import { useDeletedTokens } from "@/hooks/useDeletedTokens";
import { useSession } from "@/hooks/useSession";
import { useTokens } from "@/hooks/useTokens";
import { getFormattedContract } from "@/utils/contract";
import { DataTable } from "./DataTable";
import { columns } from "./TokenTable/columns";

export const TokensTable: React.FC<ComponentPropsWithoutRef<"div">> = (
  props,
) => {
  const tokens = useTokens();
  const session = useSession();
  const deletedTokens = useDeletedTokens();

  const filteredTokens = useMemo(() => {
    if (!tokens || !session) {
      return [];
    }

    if (!deletedTokens) {
      return tokens;
    }

    return tokens.filter(
      ({ chain, address }) =>
        !deletedTokens.includes(getFormattedContract(chain, address)),
    );
  }, [tokens, session, deletedTokens]);

  return (
    <div {...props}>
      <DataTable columns={columns} data={filteredTokens || []} />
    </div>
  );
};
