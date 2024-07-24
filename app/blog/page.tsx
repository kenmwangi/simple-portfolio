import LatestPosts from "@/components/blog/LatestPosts";
import PopularPosts from "@/components/blog/PopularPosts";
import TopCategories from "@/components/blog/TopCategories";
import Container from "@/components/shared/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Container>
      <main className="flex flex-col md:flex-row items-start justify-evenly mt-16">
        <div>
          <LatestPosts />
        </div>
        <section className="h-full sticky top-20">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCategories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </section>
      </main>
    </Container>
  );
}
