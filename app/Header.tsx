import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={{ lg: "center", base: "left", md: "left" }}
      pl="20px"
      bg="#451897"
      pt={"90"}
      pb="200"
      color="white"
    >
      <Heading as={"h1"}>Simple pricing for your business </Heading>
      <Text pt={"10"}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
