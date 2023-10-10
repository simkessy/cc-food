"use client";
import { Box, Flex, Heading, Text } from "gestalt";
import { useSession } from "next-auth/react";
import { AppBar } from "./components/AppBar";

export default function Home() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <Box color="default" height="100vh" width="100vw">
      <Flex height="100%">
        <Box column={12} padding={6}>
          {/* Nav bar  */}
          <Box color="education" borderStyle="lg" fit>
            {/* Auth button */}
            <AppBar />
          </Box>
          {/* Form body */}
          <Box color="infoBase" borderStyle="lg" fit>
            <Text>This is the body contaning the form</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
