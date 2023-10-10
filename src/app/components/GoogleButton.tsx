"use client";

import { Avatar, Box, Button, Flex } from "gestalt";
import { signIn, signOut, useSession } from "next-auth/react";

export const GoogleLoginButton = () => {
  const { data: session } = useSession();

  return (
    <Flex gap={1} alignItems="center">
      {session && (
        <Box>
          <Avatar
            name="username"
            src={session.user?.image || undefined}
            size="md"
          />
        </Box>
      )}
      <Box>
        <Button
          size="md"
          text={session?.user ? "Logout" : "Signin with Google"}
          onClick={() => (session?.user ? signOut() : signIn("google"))}
        />
      </Box>
    </Flex>
  );
};
