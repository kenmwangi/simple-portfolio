"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };
  return <Button onClick={handleClick}>Log out</Button>;
}
