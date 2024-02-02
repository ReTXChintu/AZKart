import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Corousel from "./Corousel";
import Footer from "./Footer";
import loginImage from "../images/Screenshot 2024-02-02 at 5.09.37 PM.png";
import { FaStar } from "react-icons/fa";

export default function Home() {
  // const [hotDeals, setHotDeals] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const [forYou, setForYou] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the fake store API
        const response = await axios.get("https://fakestoreapi.com/products");
        // setHotDeals(response.data.slice(0, 6));
        setFlashSale(response.data.slice(6, 12));
        setForYou(response.data.slice(12, 20));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);

  return (
    <>
      <Center  overflowX="hidden" backgroundColor={"#f7f7f7"}>
        <VStack w={{ base: "100%", md: "65%" }}>
          <HStack w={"100%"} justifyContent={"space-between"}>
            <VStack color={"black"} alignItems={"flex-start"}>
              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Toys Hobbies and Robot
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Sports and Outdoor
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Tools, Industrial & Scientific
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Automobiles & Motorcycles
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Electronics
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                  whiteSpace={"nowrap"}
                >
                  Mobile Phone & Accessories
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Computers, Videos & Games
                </Text>
              </Box>

              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Home Appliances and Wealth
                </Text>
              </Box>
              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Home Appliances and Wealth
                </Text>
              </Box>
              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Home Appliances and Wealth
                </Text>
              </Box>
              <Box
                w={"100%"}
                py={2}
                px={1}
                borderRadius={"5px"}
                _hover={{ backgroundColor: "gray.200", fontWeight: "bold" }}
              >
                <Text
                  fontSize={"sm"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Home Appliances and Wealth
                </Text>
              </Box>
            </VStack>

            <VStack w={"50%"}>
              <Box w={"100%"}>
                <Corousel />
              </Box>
              <HStack w={"100%"} justifyContent={"space-between"}>
                <Box
                  cursor={"pointer"}
                  w={"45%"}
                  bgColor={"white"}
                  p={3}
                  borderRadius={"10px"}
                  position={"relative"}
                >
                  <Heading size={"xs"}>
                    Top Rankings{" "}
                    {
                      <IconButton
                        backgroundColor={"#ff6e26"}
                        w={"10px"}
                        borderBottom="10px solid whitesmoke"
                        borderLeft="10px solid transparent"
                        borderRight="10px solid transparent"
                        _hover={""}
                        cursor={"auto"}
                        position={"absolute"}
                        top={0}
                        icon={
                          <FaStar
                            color="white"
                            fontSize={"15px"}
                            position={"absolute"}
                          />
                        }
                      />
                    }
                  </Heading>
                  <HStack justifyContent={"space-between"}>
                    <Image
                      src={forYou.length > 0 ? forYou[0].image : null}
                      w={"30%"}
                    />
                    <Image
                      src={forYou.length > 0 ? forYou[1].image : null}
                      w={"30%"}
                    />
                    <Image
                      src={forYou.length > 0 ? forYou[2].image : null}
                      w={"30%"}
                    />
                  </HStack>
                </Box>
                <Box
                  cursor={"pointer"}
                  w={"45%"}
                  bgColor={"white"}
                  p={3}
                  borderRadius={"10px"}
                >
                  <Heading size={"xs"}>Clearance Sale</Heading>
                  <HStack>
                    <Image
                      src={forYou.length > 0 ? forYou[3].image : null}
                      w={"30%"}
                    />
                    <Image
                      src={forYou.length > 0 ? forYou[4].image : null}
                      w={"30%"}
                    />
                    <Image
                      src={forYou.length > 0 ? forYou[5].image : null}
                      w={"30%"}
                    />
                  </HStack>
                </Box>
              </HStack>
            </VStack>

            <Box>
              <Image src={loginImage} />
            </Box>
          </HStack>

          <VStack w={"100%"} alignItems={"flex-start"} spacing={5} my={3} bgColor={"white"} p={4}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Heading fontSize={"md"}>Fla⚡️h Sales</Heading>
              </HStack>
              <Button variant={"ghost"} fontSize={"xs"}>
                See more
              </Button>
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {flashSale.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isRandom={false}
                  />
                ))}
              </HStack>
            </Box>
          </VStack>

          <VStack w={"100%"} alignItems={"flex-start"} spacing={5} my={3}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Heading>For You</Heading>
                <Text>(Based on Previous Search)</Text>
              </HStack>
              <Button variant={"ghost"} color={"blue"}>
                View All{"  >>"}
              </Button>
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                <Center
                  position="sticky"
                  left={0}
                  backgroundColor="rgba(169, 169, 169, 0.7)"
                  h="300px"
                >
                  <Text whiteSpace="nowrap" m={5}>
                    For You
                  </Text>
                </Center>
                {forYou.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isRandom={true}
                  />
                ))}
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Center>
      <Footer />
    </>
  );
}
