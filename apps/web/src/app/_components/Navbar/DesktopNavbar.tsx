"use client";

import {
  HStack,
  NavigationMenu,
  NavigationMenuList,
} from "@tokenstream/components";
import { ConnectKitButton } from "connectkit";
import React from "react";
import { useAccount } from "wagmi";
import { LogoLink } from "../Footer/LogoLink";
import { ThemeMenu } from "./ThemeMenu";
import { UserMenu } from "./UserMenu";

export const DesktopNavbar: React.FC = () => {
  const { address } = useAccount();

  return (
    <HStack className='h-header min-h-[60px] w-full justify-between px-[5%] py-4'>
      <LogoLink />
      <NavigationMenu position='right'>
        <NavigationMenuList>
          {address ? <UserMenu address={address} /> : <ConnectKitButton />}
          <ThemeMenu />
        </NavigationMenuList>
      </NavigationMenu>
      {/* <HStack className='gap-[26px]'> */}
      {/* <WalletPopover isDarkMode={isDarkMode} />
        {isAuthenticated ? (
          <UserMenu isDarkMode={isDarkMode} />
        ) : (
          <ConnectWalletButton />
        )} */}
      {/* <CartButton color={isDarkMode ? "white" : "black"} /> */}
      {/* </HStack> */}
    </HStack>
  );
};
