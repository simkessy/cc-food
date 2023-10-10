"use client";

import { useSession } from "next-auth/react";

export const UserName = () => {
  const { data } = useSession();
  const user = data?.user?.name || "default user";
  return <h1>Hello, {user}</h1>;
};
