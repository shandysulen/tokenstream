import { HStack } from "@tokenstream/components";
import React from "react";
import { BlockNumber } from "./Footer/BlockNumber";
import { Divider } from "./Footer/Divider";
import { EthPrice } from "./Footer/EthPrice";
import { GasPrice } from "./Footer/GasPrice";
import { Status } from "./Footer/Status";

/** To be shown at the bottom of every page */
export const Footer: React.FC = () => {
  return (
    <HStack
      as='footer'
      className='fixed bottom-0 z-footer border-t border-border justify-start h-footer w-full items-center gap-4 px-[5%] text-sm background-blur'
    >
      <Status />
      <Divider />
      <BlockNumber />
      <Divider />
      <EthPrice />
      <Divider />
      <GasPrice />
      <Divider />
    </HStack>
  );
};
