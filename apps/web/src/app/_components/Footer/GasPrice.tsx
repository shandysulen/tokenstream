"use client";

import { ExternalLink, HStack, Skeleton } from "@tokenstream/components";
import { Fuel } from "lucide-react";
import { useEffect, useState } from "react";
import { useFeeData } from "wagmi";

export const GasPrice: React.FC = () => {
  const { data, isError } = useFeeData({ watch: true });
  const [content, setContent] = useState(<Skeleton className='w-[50px] h-4' />);

  useEffect(() => {
    if (isError) {
      setContent(<span className='text-xs'>Unable to fetch gas price</span>);
    } else if (data?.formatted?.gasPrice) {
      setContent(
        <ExternalLink href='https://etherscan.io/gastracker' className='w-5'>
          {Math.trunc(parseFloat(data.formatted.gasPrice))}
        </ExternalLink>,
      );
    }
  }, [data, isError]);

  return (
    <HStack>
      <Fuel size={16} />
      {content}
    </HStack>
  );
};
