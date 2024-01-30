import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Corousel from "./Corousel";
import Footer from "./Footer";

export default function Home() {
  const [hotDeals, setHotDeals] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const [forYou, setForYou] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the fake store API
        const response = await axios.get("https://fakestoreapi.com/products");
        setHotDeals(response.data.slice(0, 10));
        setFlashSale(response.data.slice(7, 17));
        setForYou(response.data.slice(11, 20));
        console.log(response.data.length);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);
  
  return (
    <>
      <Center w={"95vw"} mt={5} overflowX="hidden">
        <VStack w={{ base: "100%", md: "80%" }}>
          <Corousel />
          <VStack w={"100%"} alignItems={"flex-start"} spacing={5} my={3}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Heading>H🔥t Deals</Heading>
                <Text>(Min 50% off)</Text>
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
                    H🔥t Deals
                  </Text>
                </Center>
                {hotDeals.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isRandom={true}
                  />
                ))}
              </HStack>
            </Box>
          </VStack>

          <VStack w={"100%"} alignItems={"flex-start"} spacing={5} my={3}>
            <HStack w={"100%"} justifyContent={"space-between"}>
              <HStack>
                <Heading>Fla⚡️h Sales</Heading>
                <Text>(Flat 70% off)</Text>
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
                    Fla⚡️h Sales
                  </Text>
                </Center>
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
