import {
  HStack,
  Image,
  Link as ChakraLink,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Center,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { LoginButton } from "./CommonButtons";

export default function NavBar() {
  return (
    <Center
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      bgColor={"#2d2d38"}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <HStack px={3} w={"80%"} spacing={5}>
        <Image src={logo} w={"70px"}></Image>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            border={"2px solid black"}
            backgroundColor={"white"}
          />
        </InputGroup>

        <ChakraLink as={Link} to="/cart">
          <HStack position={"relative"}>
            <IconButton
              background="transparent"
              color="white"
              _hover={{ background: "transparent" }}
              icon={<FaShoppingCart fontSize="24px" />} // Adjust the fontSize here
            />

            <Text
              backgroundColor={"red"}
              width={"20px"}
              height={"20px"}
              borderRadius={"full"}
              fontSize={"xs"}
              color={"white"}
              textAlign={"center"}
              position={"absolute"}
              top={0}
              right={0}
            >
              0
            </Text>
          </HStack>
        </ChakraLink>

        <ChakraLink as={Link} to="/favorites">
          <HStack position={"relative"}>
            <IconButton
              background="transparent"
              color="white"
              _hover={{ background: "transparent" }}
              icon={<FaHeart fontSize="24px" />} // Adjust the fontSize here
            />

            <Text
              backgroundColor={"red"}
              width={"20px"}
              height={"20px"}
              borderRadius={"full"}
              fontSize={"xs"}
              color={"white"}
              textAlign={"center"}
              position={"absolute"}
              top={0}
              right={0}
            >
              0
            </Text>
          </HStack>
        </ChakraLink>

        <HStack spacing={0}>
          <IconButton
            background="transparent"
            color="white"
            _hover={{ background: "transparent" }}
            icon={<FaUser fontSize={"24px"} />}
          />

          <VStack spacing={0}>
            <Text color={"white"}>Hello</Text>
            <LoginButton />
          </VStack>
        </HStack>
      </HStack>
    </Center>
  );
}
