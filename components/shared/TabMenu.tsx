import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "Recent",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Popular",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Trending",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

export default function TabMenu() {
  return (
    <section className="flex w-full pt-4 px-4">
      <div className="w-full max-w-lg">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map((category) => {
              const { name } = category;
              return (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outlin-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map((category) => {
              const { name, posts } = category;
              return (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {posts.map((post) => {
                      const { id, title, date, commentCount, shareCount } =
                        post;
                      return (
                        <li
                          key={id}
                          className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                        >
                          <Link href="#" className="font-semibold text-white">
                            <span className="absolute inset-0" />
                            {title}
                          </Link>

                          <ul
                            className="flex gap-2 text-white/50"
                            aria-hidden="true"
                          >
                            <li>{date}</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{commentCount} comments</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{shareCount} shares</li>
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}
