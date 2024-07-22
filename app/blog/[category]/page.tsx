import CardCategory from "@/components/blog/CardCategory";
import Container from "@/components/shared/Container";
import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: Props) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category,
  );

  if (!posts) {
    notFound();
  }
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              href={`/blog/${post.metadata.category}/${post.slug}`}
              key={post.slug}
            >
              <CardCategory
                title={post.metadata.title}
                summary={post.metadata.summary}
                date={post.metadata.publishedAt}
              />
            </Link>
          ))}
      </div>
    </Container>
  );
}
