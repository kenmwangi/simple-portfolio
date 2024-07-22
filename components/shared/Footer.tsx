import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Icons } from "../Icons";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const siteFooterLinks = [
  {
    title: "Contact",
    href: "mailto:kenmwangi071@gmail.com",
  },
  {
    title: "Terms of Services",
    href: "/terms-of-services",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Sitemap",
    href: "/sitemap.xml",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-10">
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-md font-semibold">Ken Mwangi</span>
            </div>
            <p className="text-gray-500 text-sm">
              Welcome to my space where I share software development insights.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://x.com/ken_cipher"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.x className="size-6 text-gray-500 hover:text-gray-700" />
              </Link>
              <Link
                href="https://github.com/kenmwangi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.github className="size-6 text-gray-500 hover:text-gray-700" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              {siteFooterLinks.map((link) => {
                const { title, href } = link;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form action="">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  defaultValue={""}
                  aria-describedby="email-error"
                />
                <Button>Subscribe</Button>
              </div>
            </form>
          </div>
        </section>
        <section className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Ken Mwangi. All rights reserved.
        </section>
      </Container>
    </footer>
  );
}
