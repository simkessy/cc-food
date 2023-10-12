"use client";
import { Box, Flex } from "gestalt";
import { useSession } from "next-auth/react";
import { AppBar } from "./components/AppBar";
import Form from "./components/Form";

export default function Home() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <Box color="recommendationBase" height="100vh" width="100vw" padding={2}>
      {/* Nav bar  */}
      <Box color="education" borderStyle="lg" fit>
        {/* Auth button */}
        <AppBar />
      </Box>
      {/* Form body */}
      {user && (
        <Box color="infoBase" borderStyle="lg" fit>
          <Form />
        </Box>
      )}
    </Box>
  );
}
