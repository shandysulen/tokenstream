"use client";

import { Spinner } from "@tokenstream/components";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPlaceholder } from "./ErrorPlaceholder";

const TokensTable = dynamic(
  () => import("../TokensTable").then((module) => module.TokensTable),
  { ssr: false, loading: () => <Spinner className='w-10 h-10 mt-10' /> },
);

export const TokensTableSuspense: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPlaceholder}>
      <Suspense fallback={<Spinner className='w-10 h-10 mt-10' />}>
        <TokensTable className='mt-10' />
      </Suspense>
    </ErrorBoundary>
  );
};
