import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Corousel from "./Corousel";
import { SeeMore } from "./CommonButtons";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Home() {
  // const user = useSelector((state) => state.user);
  const [flashSale, setFlashSale] = useState([]);
  const [discoverNew, setDiscoverNew] = useState([]);
  const [hotSales, setHotSales] = useState([]);

  useEffect(() => {
    const getFlashDeals = async () => {
      const response = await fetch(`${serverUrl}/getFlashDeals`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(`Error fetching product: ${result.message}`);
      }

      setFlashSale(result.flashDeals);
    };

    const getNewProducts = async () => {
      const response = await fetch(`${serverUrl}/getNewProducts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(`Error fetching product: ${result.message}`);
      }

      setDiscoverNew(result.newProducts);
    };

    const getHotSales = async () => {
      const response = await fetch(`${serverUrl}/getHotSales`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        console.log(`Error fetching product: ${result.message}`);
      }

      setHotSales(result.hotSales);
    };

    getFlashDeals();
    getNewProducts();
    getHotSales();
  }, []);

  return (
    <>
      <Center overflowX="hidden" backgroundColor={"#f7f7f7"}>
        <VStack w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }}>
          <Box w={"100%"}>
            <Corousel />
          </Box>

          <VStack
            w={"100%"}
            alignItems={"flex-start"}
            spacing={5}
            my={3}
            bgColor={"white"}
            p={4}
          >
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"md"}>Fla⚡️h Deals</Heading>
              <SeeMore query={"flash-deals"} />
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {flashSale.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </HStack>
            </Box>
          </VStack>

          <VStack
            w={"100%"}
            alignItems={"flex-start"}
            spacing={5}
            my={3}
            bgColor={"white"}
            p={4}
          >
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"md"}>Discover New</Heading>
              <SeeMore query={"discover-new"} />
            </HStack>

            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {discoverNew.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </HStack>
            </Box>
          </VStack>

          <VStack
            w={"100%"}
            alignItems={"flex-start"}
            spacing={5}
            my={3}
            bgColor={"white"}
            p={4}
          >
            <HStack w={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"md"}>H🔥t Sales</Heading>
              <SeeMore query={"hotSales"} />
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {hotSales.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Center>
    </>
  );
}
