import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t py-6">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-sm text-zinc-500">
            &copy; Ken Mwangi, {new Date().getFullYear()}. All rights reserved.
          </span>
          <Link
            href="#"
            target="_top"
            className="text-sm text-gray-700 flex items-center justify-center size-8 rounded-md bg-zinc-100"
          >
            <ChevronUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
