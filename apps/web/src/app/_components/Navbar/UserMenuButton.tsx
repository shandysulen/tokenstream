"use client";

import { Avatar, HStack } from "@tokenstream/components";
import { Address } from "viem";
import { normalize } from "viem/ens";
import { useEnsAvatar, useEnsName } from "wagmi";

interface UserMenuButtonProps {
  readonly address: Address;
}

export const UserMenuButton: React.FC<UserMenuButtonProps> = ({ address }) => {
  const { data: name } = useEnsName({ address });
  const { data: avatar } = useEnsAvatar({
    name: normalize(name || ""),
    query: { enabled: !!name },
  });

  console.log("avatar", avatar);

  return (
    // <button className='rounded-full border border-slate-200 text-black bg-transparent'>
      <HStack className='items-center justify-start gap-2.5 pr-4'>
        <Avatar name={name} address={address} src={avatar} size='md' />
        <span className='font-bold'>{name}</span>
      </HStack>
    {/* </button> */}
  );
};
