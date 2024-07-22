import { categories } from "@/lib/placeholder-data";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { POSTS } from "@/lib/constants";

export default function TopCategories() {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => {
        const { title, href, description } = post;
        return (
          <Button
            key={href}
            asChild
            variant="secondary"
            className="hover:scale-110 transition-all"
          >
            <Link href={`${href}`}>{title}</Link>
          </Button>
        );
      })}
    </section>
  );
}
