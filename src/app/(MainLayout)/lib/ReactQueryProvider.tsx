"use client";
import React, { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


type Props = {
  children: React.ReactNode;
};

export default function ReactQueryProvider({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      {children}
    </QueryClientProvider>
  );
}
