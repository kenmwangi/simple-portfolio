import { formatDate, getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import React from "react";

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
        Recently Published
      </h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug} className="text-wrap max-w-lg my-10">
            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h3 className="font-medium text-blue-500 py-2 leading-5 hover:text-blue-400">
                {post.metadata.title}
              </h3>
            </Link>
            <p className="leading-8 my-3">{post.metadata.summary}</p>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </article>
        ))}
    </>
  );
}
