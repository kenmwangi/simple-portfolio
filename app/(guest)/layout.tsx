import Banner from "@/components/shared/Banner";
import React, { ReactNode } from "react";

export default function GuestLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Banner />
      {children}
    </div>
  );
}
