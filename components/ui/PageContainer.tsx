import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10 lg:px-14 lg:py-20">{children}</div>;
}
