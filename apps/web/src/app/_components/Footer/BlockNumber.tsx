"use client";

import { ExternalLink, HStack, Skeleton } from "@tokenstream/components";
import { Box } from "lucide-react";
import { useEffect, useState } from "react";
import { useBlockNumber } from "wagmi";
import { getEtherscanBlockUrl } from "@/utils/etherscan";

export const BlockNumber: React.FC = () => {
  const { data, isLoading, isError } = useBlockNumber({ watch: true });
  const [content, setContent] = useState(<Skeleton className='w-[75px] h-4' />);

  useEffect(() => {
    if (isError) {
      setContent(<span className='text-xs'>Unable to fetch block number</span>);
    } else if (data) {
      const formattedBlockNumber = Number(data);
      setContent(
        <ExternalLink
          href={getEtherscanBlockUrl(formattedBlockNumber)}
          className='w-[65px]'
        >
          {formattedBlockNumber}
        </ExternalLink>,
      );
    }
  }, [data, isError, isLoading]);

  return (
    <HStack>
      <Box size={16} />
      {content}
    </HStack>
  );
};
