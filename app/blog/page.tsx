import React from 'react';

import { getPosts } from '@/lib/posts';
import { Redis } from '@upstash/redis';
import Posts from '@/components/Posts';

const redis = Redis.fromEnv();
export const revalidate = 0;

export const metadata = {
  title: 'Posts',
  description: '',
};

export default async function PostsPage() {
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
  return (<section className="mt-16 mx-auto max-w-4xl px-6 md:px-12">
    <h1>My learnings</h1>
    <Posts allPosts={allPosts} views={views} />
    </section>
  )
}