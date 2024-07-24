import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import React from "react";

export default function DocsPage() {
  return (
    <section className="flex w-full justify-center !pt-6 !md:pt-16 !pb-8 animate-in fade-in duration-500">
      <div className="w-full max-w-5xl relative flex justify-center">
        <div className="w-full max-w-full min-h-[600px] grid-cols-1 grid md:grid-cols-[180px,1fr] lg:grid-cols-[180px,1fr,180px] gap-10 md:gap-4">
          <div className="relative">
            <div className="md:sticky top-16">
              <h2 className="flex items-center gap-2">
                <Folder />
                <span>Documentation</span>
              </h2>
              <div className="mt-6">
                <h3 className="text-stone-300 font-medium tracking-wide uppercase text-[12px]">
                  Docs
                </h3>
              </div>
            </div>
          </div>
          <div className="">
            <article className="w-full pb-8 md:pb-28 relative max-w-[650px]">
              <h1 className="text-3xl font-bold tracking-wide text-stone-300">
                This is documentation heading
              </h1>
            </article>
          </div>
          <div className="pl-4 hidden lg:block">
            <div className="sticky top-16">
              <div className="relative bg-primary/10 rounded-[10px] !p-2 text-stone-700">
                sticky news here
                <Button className="w-full mt-4">Sign up</Button>
              </div>
              <div className="mt-1 text-center text-stone-400 text-[12px]">
                free to start, no cc required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
