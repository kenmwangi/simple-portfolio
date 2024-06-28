import DialogModal from "@/components/shared/DialogModal";
import FAQ from "@/components/shared/FAQ";
import ShippingForm from "@/components/shared/ShippingForm";
import SimpleMenuItem from "@/components/shared/SimpleMenuItem";
import TabMenu from "@/components/shared/TabMenu";
import { Button, Menu } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/16/solid";
import React from "react";

export default function Home() {
  return (
    <div className="space-y-6 flex flex-col">
      <main className="relative">
        <div className="-z-10 absolute inset-[35%] block rounded-full bg-white/15 blur-2xl" />
      </main>
      <section className="h-full flex items-center justify-center">
        <TabMenu />
        <ShippingForm />
      </section>
      {/* <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        Save changes
      </Button>
      <DialogModal />
      <main className="space-y-6 flex h-screen items-center justify-center">
        <SimpleMenuItem />
        <FAQ />
      </main> */}
    </div>
  );
}
