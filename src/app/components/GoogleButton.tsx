"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";

export const GoogleLoginButton = () => {
  const { data: session } = useSession();

  return (
    <GoogleButton
      type="dark"
      label={session?.user ? "Logout" : "Signin with Google"}
      onClick={() => (session?.user ? signOut() : signIn("google"))}
    />
  );
};
