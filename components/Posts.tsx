"use client";

import React from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { calculateReadingTime, reformatDate } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Posts({
  allPosts,
  views,
}: {
  allPosts: any;
  views: any;
}) {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  const filteredPosts = tag
    ? allPosts.filter((post: any) => post.metadata.tag.includes(tag))
    : allPosts;

  return (
    <section className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-10 pb-10 mt-4 ">
        <div className="flex flex-col">
          {/* <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
            My Blog
          </span> */}
          {/* THis */}

          <div>
            <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2">
              {filteredPosts
                .sort((a: any, b: any) => {
                  if (
                    new Date(a.metadata.publishedAt) >
                    new Date(b.metadata.publishedAt)
                  ) {
                    return -1;
                  }
                  return 1;
                })
                .map((post: any) => {
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex flex-row justify-between items-center duration-300   bg-neutral-50 md:hover:bg-zinc-50 md:p-4 rounded-lg cursor-pointer"
                    >
                      <div className="flex flex-col space-y-2">
                        <span className="text-secondaryDark">
                          {post.metadata.title}
                        </span>

                        <div className="flex flex-row space-x-2 items-center text-secondaryDarker">
                          <span>{reformatDate(post.metadata.publishedAt)}</span>
                          <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
                          <span>
                            <span>
                              {Intl.NumberFormat("en-US", {
                                notation: "compact",
                              }).format(views[post.slug])}{" "}
                              {" views"}
                            </span>
                          </span>
                          <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
                          <span>
                            <span>
                              {calculateReadingTime(post.content)}
                              {" min read"}
                            </span>
                          </span>
                        </div>
                      </div>

                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-secondaryDarker"
                      >
                        <path
                          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
