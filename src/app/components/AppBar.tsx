import { Box, Flex, Heading } from "gestalt";
import { GoogleLoginButton } from "./GoogleButton";
import { useSession } from "next-auth/react";

export const AppBar = () => {
  const { data: session } = useSession();
  return (
    <Box borderStyle="lg">
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="between"
        gap={2}
      >
        <Box>
          <Heading>Climate Change and Food</Heading>
        </Box>
        <Box >
          <GoogleLoginButton />
        </Box>
      </Flex>
    </Box>
  );
};
