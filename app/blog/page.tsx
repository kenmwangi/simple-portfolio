import { getBlogPosts } from "@/lib/blog";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default async function Blog() {
  const posts = await getBlogPosts();
  return (
    <section className="max-w-2xl">
      <h1
        className={`${josefin.className} font-medium text-2xl mb-8 tracking-tighter`}
      >
        Blog
      </h1>

      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => {
          const { slug, metadata } = post;
          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="flex flex-col space-y-1 mb-4"
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {metadata.publishedAt}
                </p>
              </div>
            </Link>
          );
        })}
    </section>
  );
}
