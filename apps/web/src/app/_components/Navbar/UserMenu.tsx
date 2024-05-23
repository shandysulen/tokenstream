"use client";

import {
  Avatar,
  HStack,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@tokenstream/components";
import React from "react";
import { Address } from "viem";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";
import { useTriggerFix } from "@/hooks/useTriggerFix";
import { LogOutMenuItem } from "./UserMenu/LogOutMenuItem";
import { ProfileMenuItem } from "./UserMenu/ProfileMenuItem";

export interface UserMenuProps {
  readonly isDarkMode?: boolean;
  readonly address: Address;
}

export const UserMenu: React.FC<UserMenuProps> = ({ address }) => {
  const fix = useTriggerFix();
  const { data: name } = useEnsName({ address });
  const { data: avatar } = useEnsAvatar({
    name: normalize(name || ""),
    query: { enabled: !!name },
  });

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className='rounded-full border border-slate-200 text-black bg-transparent px-0'
        {...fix}
      >
        <HStack className='items-center justify-start gap-2.5 pr-4'>
          <Avatar name={name} address={address} src={avatar} size='md' />
          <span className='font-bold'>{name}</span>
        </HStack>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ProfileMenuItem />
        {/* <WatchlistMenuItem />
        <FavoritesMenuItem /> */}
        {/* <ColorModeMenuItem /> */}
        {/* <SettingsMenuItem /> */}
        <LogOutMenuItem />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
