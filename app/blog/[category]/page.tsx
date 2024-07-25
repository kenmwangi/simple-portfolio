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

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  let { category } = params;

  return {
    title: category.toLocaleUpperCase(),
    description: `All posts in ${category} category`,
  };
}

export default function CategoryPage({ params }: Props) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts.length) {
    notFound();
  }
  return (
    <Container>
      <h1 className="font-semibold mt-8">
        Category:{" "}
        <span className="text-balance tracking-wider mt-4 uppercase text-blue-600">
          {posts[0]?.metadata.category}
        </span>
      </h1>
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
