import LoginForm from "@/components/auth/LoginForm";
import { Home, Loader2 } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export default function Login({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Link href="/">
          <span className="inline-flex gap-1.5 items-center group">
            <Home className="w-auto h-[24px] group-hover:text-primary" />
            <span className="group-hover:text-primary">Ken Mwangi</span>
          </span>
        </Link>
      </div>
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <LoginForm
          isVerified={isVerified}
          OAuthAccountNotLinked={OAuthAccountNotLinked}
        />
      </Suspense>
    </div>
  );
}
