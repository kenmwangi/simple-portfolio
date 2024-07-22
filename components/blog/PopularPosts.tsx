import { popularPosts } from "@/lib/placeholder-data";
import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";

export default function PopularPosts() {
  return (
    <div className="overflow-auto">
      {popularPosts.map((post) => {
        return (
          <Link key={post.title} href="/blog">
            <li className="flex items-center gap-2 group cursor-pointer py-2">
              <Icons.arrowRight className="text-muted-foreground size-6 group-hover:translate-x-1 transition-all" />
              <p>{post.title}</p>
            </li>
          </Link>
        );
      })}
    </div>
  );
}
