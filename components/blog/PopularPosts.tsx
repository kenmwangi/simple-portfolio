"use client";
// import { popularPosts } from "@/lib/placeholder-data";
import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import PopularPostsSkeleton from "../blog/PopularPostsSkeleton";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  if (isLoading) return <PopularPostsSkeleton />;
  if (error) return <div>Failed to load</div>;
  return (
    <div className="overflow-auto">
      {data?.map((post: { category: string; slug: string; title: string }) => (
        <Link key={post.title} href={`/blog/${post.category}/${post.slug}`}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="text-muted-foreground size-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </div>
  );
}
