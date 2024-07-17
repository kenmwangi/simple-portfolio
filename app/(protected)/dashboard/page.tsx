import { auth } from "@/auth";
import LogoutButton from "@/components/auth/LogoutButton";
import { redirect } from "next/navigation";
import React from "react";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{session.user?.email}</pre>
      <LogoutButton />
    </div>
  );
}
