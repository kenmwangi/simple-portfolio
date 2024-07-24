"use client";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
interface SocialButtonProps {
  children: ReactNode;
  provider: string;
}

export default function SocialButton({
  children,
  provider,
}: SocialButtonProps) {
  const handleClick = async () => {
    await signIn(provider);
  };
  return (
    <Button
      onClick={handleClick}
      className="bg-stone-50 text-stone-600 mt-4 flex items-center gap-4 text-sm"
      variant="outline"
      // className="bg-stone-50 hover:bg-stone-100/10 mt-4 flex items-center gap-2 w-full font-medium text-base/6"
    >
      {children}
    </Button>
  );
}
