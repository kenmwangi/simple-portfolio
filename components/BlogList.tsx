import React from "react";

import { getPosts } from '@/lib/posts';
import { Redis } from '@upstash/redis';
import Posts from '@/components/Posts';

const redis = Redis.fromEnv();
export const revalidate = 0;

export default async function BlogList() {
    let allPosts = getPosts();
  const views = (
    await redis.mget<number[]>(
      ...allPosts.map((p) => ['pageviews', 'posts', p.slug].join(':')),
    )
  ).reduce(
    (acc, v, i) => {
      acc[allPosts[i].slug] = v ?? 0;
      return acc;
    },
    {} as Record<string, number>,
  );
  return (
    <section className="mx-auto max-w-4xl mt-16 px-6 sm:mt-20 sm:pb-16 md:px-12 lg:mt-24">
      <div className="">Featured posts</div>
      <Posts allPosts={allPosts} views={views} />
    </section>
  );
}
