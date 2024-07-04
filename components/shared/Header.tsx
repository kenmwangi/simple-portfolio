import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex w-full py-5">
      <div className="flex gap-8">
        <div className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <Link href="/blog">Blog</Link>
        </div>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
            Solutions
          </PopoverButton>
          <PopoverBackdrop className="fixed inset-0 bg-black/15" />
          <PopoverPanel
            transition
            anchor="bottom"
            className="z-50 origin-top data-[closed]:scale-95 mt-2 divide-y divide-white/5 rounded-xl bg-black/75 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <Link
                href="#"
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              >
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">
                  Create your own targeted content
                </p>
              </Link>
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </Link>
            </div>
            <div className="p-3">
              <Link
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Documentation</p>
                <p className="text-white/50">
                  Start integrating products and tools
                </p>
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
        <div className="text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          Pricing
        </div>
      </div>
    </header>
  );
}
