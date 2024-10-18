"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Code,
  Briefcase,
  Mail,
  Download,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-4 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <Link href="/" className="text-2xl font-bold">
          KM
        </Link>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="text-white p-0 hover:text-gray-100 hover:bg-transparent transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gray-900 text-white border-l border-gray-800">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="#about"
                className="flex items-center space-x-2 text-xl hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code size={20} />
                <span>About</span>
              </Link>
              <Link
                href="#experience"
                className="flex items-center space-x-2 text-xl hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Briefcase size={20} />
                <span>Experience</span>
              </Link>
              <Link
                href="#contact"
                className="flex items-center space-x-2 text-xl hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={20} />
                <span>Contact</span>
              </Link>
              <a
                href="/resume.pdf"
                download
                className="flex items-center space-x-2 text-xl hover:text-gray-300 transition-colors"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center space-x-2 text-xl hover:text-gray-300 transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span>Toggle Theme</span>
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-grow">
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-gray-900 to-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Ken Mwangi
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8"
          >
            Fullstack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4 mb-12"
          >
            <Link
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300"
            >
              Contact Me
            </Link>
            <Link
              href="#experience"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              View Experience
            </Link>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-lg mb-4">
                I&apos;m a fullstack developer with 4 years of experience in
                microservices. Currently, I&apos;m working at African Real
                Estate, a leading real estate company in Nairobi, Kenya. My
                expertise lies in TypeScript, Golang, and Python, which I use to
                build scalable and efficient solutions.
              </p>
              <p className="text-lg">
                I&apos;m passionate about creating innovative solutions that
                drive the real estate industry forward. My experience in
                microservices architecture allows me to develop robust, scalable
                applications that meet the complex needs of modern businesses.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center space-x-6"
            >
              <a
                href="https://github.com/kenmwangi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://twitter.com/ken_cipher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/kkmwangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </motion.div>
          </div>
        </section>
        <section
          id="experience"
          className="py-20 px-4 bg-gradient-to-br from-gray-800 to-black"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Fullstack Developer
                </h3>
                <p className="text-lg text-gray-400 mb-4">
                  African Real Estate • 2022 - Present
                </p>
                <p className="text-lg">
                  Designing and implementing scalable microservices using
                  TypeScript, Golang, and Python. Building end-to-end solutions
                  for the real estate industry, focusing on innovative
                  technologies to streamline property management and improve
                  customer experiences.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Key Responsibilities
                </h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>Developing and maintaining microservices architecture</li>
                  <li>Full stack development using modern web technologies</li>
                  <li>Creating custom applications for property management</li>
                  <li>
                    Implementing data analytics solutions for valuable insights
                  </li>
                  <li>
                    Collaborating with cross-functional teams to deliver
                    high-quality software
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20 px-4 bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="py-8 px-4 text-center bg-black">
        <p className="text-sm">© 2024 Ken Mwangi. All rights reserved.</p>
      </footer>
    </div>
  );
}
