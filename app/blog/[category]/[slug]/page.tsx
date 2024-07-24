import BreadCrumbCustom from "@/components/blog/BreadCrumbCustom";
import { CustomMDX } from "@/components/blog/CustomMDX";
import Container from "@/components/shared/Container";
import { formatDate, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import React from "react";

interface SingleBlogProps {
  params: { slug: string; category: string };
}

export default function SingleBlog({ params }: SingleBlogProps) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <section className="mt-8 lg:mt-16">
      <Container className="px-4">
        <BreadCrumbCustom category={post.metadata.category} slug={post.slug} />
        <h1 className="font-semibold text-2xl tracking-tighter mt-4 text-balance">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-4 text-sm">
          <p className="text-sm text-neutral-500 mt-2">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </section>
  );
}
