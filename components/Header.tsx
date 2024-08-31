import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-8 z-10 sm:top-12 lg:top-20 xl:top-16">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-gray-100 size-20 rounded-full p-2 flex items-center justify-center"
            >
              <span className="sr-only">Ken Mwangi</span>
              <Image
                width={200}
                height={200}
                alt="Ken Mwangi"
                src="/ken.jpeg"
                className="size-16 rounded-full object-cover bg-gray-100 border-2 border-gray-100"
              />
            </Link>
            <nav>
              <ul className="flex flex-col gap-1 divide-y divide-zinc-100">
                <li>
                  <Link
                    href="/"
                    className="text-sm tracking-wide text-zinc-700 hover:text-zinc-900"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-sm tracking-wide text-zinc-700 hover:text-zinc-900"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm tracking-wide text-zinc-700 hover:text-zinc-900"
                  >
                   Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/oss"
                    className="text-sm tracking-wide text-zinc-700 hover:text-zinc-900"
                  >
                    Open-source Contributions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Link
            href="mailto:kenmwangi071@gmail.com"
            target="_blank"
            className="group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-950 px-3 transition-all duration-500"
          >
            <span className="text-sm tracking-wide text-white">
              Let&apos;s Talk
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3 text-white/60 transition duration-300 group-hover:rotate-45 group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
