"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import RouteTransition from "@/components/RouteTransition";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RouteTransition>{children}</RouteTransition>
    </ThemeProvider>
  );
}
