"use client";

import { HStack } from "@tokenstream/components";

/** Status of the SSE or WebSockets connection??? */
export const Status: React.FC = () => {
  return (
    <HStack>
      <span className='relative flex h-2 w-2'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 top-px'></span>
        <span className='relative  inline-flex rounded-full h-2 w-2 bg-green-500'></span>
      </span>
      <span className='text-sm text-green-500'>LIVE</span>
    </HStack>
  );
};
