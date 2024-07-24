import SearchComponent from "@/components/SearchComponent";
import Container from "@/components/shared/Container";
import DialogModal from "@/components/shared/DialogModal";
import FAQ from "@/components/shared/FAQ";
import ShippingForm from "@/components/shared/ShippingForm";
import SimpleMenuItem from "@/components/shared/SimpleMenuItem";
import TabMenu from "@/components/shared/TabMenu";
import { Card } from "@/components/ui/card";
import { Button, Menu } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <Container>
      <main className="relative w-full max-w-5xl mt-16">
        <Card className="shadow-md p-6 flex flex-col items-start relative">
          <div className="max-w-[600px]">
            <Link href="/">
              <Image
                width={100}
                height={120}
                alt="Ken"
                src="/me.jpg"
                className="rounded-full object-fit w-[50px] h-[50px]"
              />
            </Link>
          </div>
          <h1 className="text-3xl text-stone-400 font-semibold mt-2">
            Ken Mwangi
          </h1>
          <p className="text-stone-300 mt-1">Data Analyst & Technical Writer</p>

          <div className="w-full mt-6 grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2 sm:max-w-[380px]">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:opacity-90 shadow-sm h-10 rounded-md px-6"
            >
              Explore projects
            </Link>
          </div>
        </Card>
      </main>
    </Container>
    // <main className="sm:container">
    //   <SearchComponent />
    //   <h3 className="text-2xl sm:text-4xl font-bold text-slate-500 py-16 text-center uppercase tracking-wide">
    //     There is always a spot available.
    //   </h3>

    //   <section className="hidden lg:block pt-16 pb-32">
    //     <div className="grid grid-cols-3 place-items-center">
    //       <div className="flex flex-col items-center">
    //         <div className="flex flex-col bg-blue-500 text-white relative justify-center items-center rounded-full w-12 h-12">
    //           <p
    //             className="text-2xl font-bold
    //           after:content-[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1]
    //           after:rounded-full after:bg-gray-100
    //           "
    //           >
    //             1
    //           </p>
    //         </div>
    //         <div className="pt-2 text-slate-500 text-lg trackig-wide">
    //           Enter your destination
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <div className="flex flex-col bg-blue-500 text-white relative justify-center items-center rounded-full w-12 h-12">
    //           <p
    //             className="text-2xl font-bold
    //           after:content-[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1]
    //           after:rounded-full after:bg-gray-100
    //           "
    //           >
    //             2
    //           </p>
    //         </div>
    //         <div className="pt-2 text-slate-500 text-lg trackig-wide">
    //           Pick date and time
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-center">
    //         <div className="flex flex-col bg-blue-500 text-white relative justify-center items-center rounded-full w-12 h-12">
    //           <p
    //             className="text-2xl font-bold
    //             before:content=[''] before:absolute before:w-[1000px]
    //             before:-z-10 before:top-1/2 before:h-[2px]
    //             before:-left-[700px] lg:before:-left-[920px] before:bg-blue-500
    //             after:content-[''] after:absolute after:-left-2 after:-top-2 after:w-16 after:h-16 after:-z-[1]
    //             after:rounded-full after:bg-gray-100
    //           "
    //           >
    //             3
    //           </p>
    //         </div>
    //         <div className="pt-2 text-slate-500 text-lg trackig-wide">
    //           Pick a spot
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <h2 className="text-2xl sm:text-5xl text-center pb-32 text-slate-500">
    //     No more running around looking for a parking spot.
    //   </h2>

    //   <section>
    //     <div className="pt-16 w-full absolute left-0 sm:bg-map bg-cover bg-no-repeat bg-center bg-blue-500 bg-opacity-25 bg-blend-overlay">
    //       <div className="grid grid-cols-1 sm:grid-cols-2 container pb-16 place-items-center sm:place-items-start">
    //         <div className="flex flex-col text-zinc-600 text-center sm:text-left">
    //           <p className="text-3xl sm:text-4xl font-bold">Fully responsive</p>
    //           <p className="text-md sm:text-lg pt-2 tracking-tight">
    //             It feels just like a mobile app.
    //           </p>
    //         </div>

    //         <div className="pt-2 sm:pt-0">
    //           <Image
    //             alt="Android"
    //             width={320}
    //             height={400}
    //             src="/android-icon.svg"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    // <div className="space-y-6 flex flex-col">
    //   <main className="relative">
    //     <div className="-z-10 absolute inset-[35%] block rounded-full bg-white/15 blur-2xl" />
    //   </main>
    //   <section className="h-full flex items-center justify-center">
    //     <TabMenu />
    //     <ShippingForm />
    //   </section>
    //   <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
    //     Save changes
    //   </Button>
    //   <DialogModal />
    //   <main className="space-y-6 flex h-screen items-center justify-center">
    //     <SimpleMenuItem />
    //     <FAQ />
    //   </main>
    // </div>
  );
}
