"use client";

import { Button, Stack } from "@tokenstream/components";
import { RotateCwIcon } from "lucide-react";
import { FallbackProps } from "react-error-boundary";

export const ErrorPlaceholder: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Stack className='mt-10 w-full items-center gap-4'>
      <span className='text-black'>⚠️ Unable to fetch tokens.</span>
      <Button
        variant='ghost'
        icon={<RotateCwIcon size={14} />}
        className='text-gray-600'
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </Stack>
  );
};
