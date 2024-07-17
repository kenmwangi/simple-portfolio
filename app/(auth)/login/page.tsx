import LoginForm from "@/components/auth/LoginForm";
import React from "react";

export default function Login({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) {
  const isVerified = searchParams.verified === "true";
  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";
  return (
    <div className="h-screen flex items-center justify-center">
      <LoginForm
        isVerified={isVerified}
        OAuthAccountNotLinked={OAuthAccountNotLinked}
      />
    </div>
  );
}
