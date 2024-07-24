import RegisterForm from "@/components/auth/RegisterForm";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Link href="/">
          <span className="inline-flex gap-1.5 items-center group">
            <Home className="w-auto h-[24px] group-hover:text-primary" />
            <span className="group-hover:text-primary">Ken Mwangi</span>
          </span>
        </Link>
      </div>
      <RegisterForm />
    </section>
  );
}
