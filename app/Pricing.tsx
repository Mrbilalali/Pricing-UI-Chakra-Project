import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import Checkmarkicon from "./icon/Checkmarkicon";

export default function Pricing() {
  return (
    <Box
      maxW={"950px"}
      mx={{base:"10", lg:"auto"}}
      mt={"-130"}
      bg="white"
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    >
      <Flex direction={{base: "column", md: "column", lg:"row"}}>
        {/* left side box */}
        <Box bg={"#cbb8ee"} p="40px" textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize="24px">
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button bg={"#805ad5"} w={"200px"} mt="20px" textColor={"white"}>
            Get Started 
          </Button>
        </Box>

        {/* Right side box */}
        <Box pt={"50"} pl="25" pr={"10"}>
          <Text mb={"10px"}>
            Access these features when you get this pricing package for your
            business.
          </Text>

          <HStack mb={"15px"}>
            <Icon as={Checkmarkicon}></Icon>
            <Text>International calling and messaging API</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={Checkmarkicon}></Icon>
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={Checkmarkicon}></Icon>
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={Checkmarkicon}></Icon>
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
