import { auth } from "@/auth";
import LogoutButton from "@/components/auth/LogoutButton";
import React from "react";

export default async function Admin() {
  const session = await auth();
  console.log(session);
  if (session?.user?.role !== "ADMIN") {
    return <div>You are not admin</div>;
  }
  return (
    <div>
      <h3>Admin</h3>
      <LogoutButton />
    </div>
  );
}
