import { buttonStyles } from "@/components/ui/styles";
import { ArrowUpLeft, PackageOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="h-[75vh] space-y-4 mt-6 flex w-full flex-col items-center justify-center text-gray-600">
      <PackageOpen className="mb-4" size={40} />
      <p className="text-xl mb-1 font-medium">Couldn&apos;t find the page</p>
      <p className="text-base mb-4">Not Found (404)</p>
      <div className="flex items-center space-x-1 group">
        <Link href="/" className={buttonStyles}>
          <ArrowUpLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] "
          />
          <span>Return home</span>
        </Link>
      </div>
    </section>
  );
}
