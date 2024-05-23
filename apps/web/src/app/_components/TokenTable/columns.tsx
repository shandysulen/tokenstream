"use client";

import { useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/table-core";
import { Button, ExternalLink, HStack, Tooltip } from "@tokenstream/components";
import { DbToken } from "@tokenstream/db";
import { Eye, Pin, Trash } from "lucide-react";
import Image from "next/image";
import TimeAgo from "timeago-react";
import { trpc } from "@/app/_trpc/client";
import { chains } from "@/constants/chains";
import { UndefinedProperties } from "@/types/helpers";
import { getFormattedContract } from "@/utils/contract";
import { getFormattedDate } from "@/utils/datetime";
import { getEtherscanAddressUrl } from "@/utils/etherscan";
import { getTruncatedWalletAddress } from "@/utils/wallet";

export type TokenRowLoading = UndefinedProperties<DbToken>;

export const tokenRowLoading: TokenRowLoading = {
  chain: undefined,
  name: undefined,
  symbol: undefined,
  address: undefined,
  decimals: undefined,
  totalSupply: undefined,
  deployer: undefined,
  deployedAt: undefined,
  gasUnits: undefined,
  gasPrice: undefined,
};

export const columns: ColumnDef<DbToken>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const { name, address, chain } = row.original;
      const queryClient = useQueryClient();
      const { mutate: deleteToken } = trpc.account.addDeletedToken.useMutation({
        onSuccess: () => {
          alert(`Successfully deleted item...`);
          queryClient.invalidateQueries({
            queryKey: ["account.deletedTokens"],
          });
        },
      });

      return (
        <HStack role='group' className='gap-1'>
          <Tooltip content='Hide'>
            <Button
              size='icon'
              icon={<Eye size={20} />}
              variant='ghost'
              onClick={() => {
                alert(`Hiding ${name}...`);
              }}
            />
          </Tooltip>
          <Tooltip content='Delete'>
            <Button
              size='icon'
              icon={<Trash size={20} />}
              variant='ghost'
              onClick={() => deleteToken(getFormattedContract(chain, address))}
            />
          </Tooltip>
          <Tooltip content='Pin'>
            <Button
              size='icon'
              icon={<Pin size={20} />}
              variant='ghost'
              onClick={() => {
                alert(`Pinning ${name}...`);
              }}
            />
          </Tooltip>
        </HStack>
      );
    },
  },
  {
    id: "chain",
    cell: ({ row }) => {
      return (
        <Image
          src={`/chains/${row.original.chain}.svg`}
          alt={chains[row.original.chain]}
          width={12}
          height={12}
        />
      );
    },
  },
  {
    header: "Name",
    cell: ({ row }) => {
      return (
        <span className='font-bold'>
          {row.original.symbol} ({row.original.name})
        </span>
      );
    },
  },
  {
    header: "Address",
    cell: ({ row }) => {
      const { address } = row.original;

      return (
        <ExternalLink href={getEtherscanAddressUrl(address)}>
          {address && getTruncatedWalletAddress(address)}
        </ExternalLink>
      );
    },
  },
  {
    header: "Total Supply",
    cell: ({ row }) => {
      const { totalSupply, decimals } = row.original;

      const formattedTotalSupply = Number(totalSupply) / 10 ** decimals;

      return <span>{formattedTotalSupply.toLocaleString()}</span>;
    },
  },
  {
    header: "Deployer",
    cell: ({ row }) => {
      const { deployer } = row.original;

      return (
        <ExternalLink href={getEtherscanAddressUrl(deployer)}>
          {getTruncatedWalletAddress(deployer)}
        </ExternalLink>
      );
    },
  },
  {
    header: "Deployed",
    cell: ({ row }) => {
      const { deployedAt } = row.original;

      return (
        <Tooltip
          content={getFormattedDate(deployedAt, {
            showDay: true,
            showTime: true,
          })}
        >
          <TimeAgo datetime={deployedAt} className='min-w-[110px]' />
        </Tooltip>
      );
    },
  },
];
