"use client";

import { ExternalLink, HStack, Skeleton } from "@tokenstream/components";
import Image from "next/image";
import { useEthPrice } from "@/hooks/useEthPrice";

export const EthPrice: React.FC = () => {
  const { data, isError, isLoading } = useEthPrice();

  let content = <></>;
  if (isLoading) {
    content = <Skeleton className='w-[60px] h-4' />;
  } else if (isError) {
    content = <span className='text-xs'>Unable to fetch ETH price</span>;
  } else if (data) {
    content = (
      <ExternalLink
        href='https://www.coingecko.com/en/coins/ethereum'
        className='w-[65px]'
      >
        ${data}
      </ExternalLink>
    );
  }

  return (
    <HStack>
      <Image src='/eth.svg' alt='ETH' width={10} height={16} />
      {content}
    </HStack>
  );
};
