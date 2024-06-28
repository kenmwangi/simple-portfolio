"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import React from "react";

export default function FAQ() {
  return (
    <section className=" h-screen w-full pt-32 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            If you&apos;re unhappy with your purchase, we&apos;ll refund you in
            fill.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Do you offer technical support?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <DisclosurePanel
              transition
              className="mt-2 text-sm/5 text-white/50 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              No.
            </DisclosurePanel>
          </div>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          {({ open }) => (
            <>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                  Do you offer technical support
                </span>
                <ChevronDownIcon
                  className={clsx(
                    "w-5 size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180",
                    open && "rotate-180"
                  )}
                />
              </DisclosureButton>
              <div className="overflow-hidden py-2">
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel
                      static
                      as={motion.div}
                      initial={{ opacity: 0, y: -24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -24 }}
                      //   transition={{ duration: 0.2, ease: easeOut }}
                      className="origin-top text-white/50"
                    >
                      Yes
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
