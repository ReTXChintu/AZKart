import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
// import ProductCard from "./ProductCard";
import Corousel from "./Corousel";
// import { useSelector } from "react-redux";
// const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Home() {
  // const user = useSelector((state) => state.user);
  // const [flashSale, setFlashSale] = useState([]);
  // // const [hotDeals, setHotDeals] = useState([]);
  // const [forYou, setForYou] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {};

    fetchProducts(); // Call the fetchProducts function when the component mounts
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
              <HStack>
                <Heading fontSize={"md"}>Fla⚡️h Deals</Heading>
              </HStack>
              <Button variant={"ghost"} fontSize={"xs"}>
                See more
              </Button>
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {/* {flashSale.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isRandom={false}
                  />
                ))} */}
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
              <HStack>
                <Heading fontSize={"md"}>Discover New</Heading>
              </HStack>
              <Button variant={"ghost"} fontSize={"xs"}>
                See more
              </Button>
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {/* {forYou.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isRandom={false}
                  />
                ))} */}
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
              <HStack>
                <Heading fontSize={"md"}>H🔥t Sales</Heading>
              </HStack>
              <Button variant={"ghost"} fontSize={"xs"}>
                See more
              </Button>
            </HStack>
            <Box position={"relative"} overflow={"hidden"} w={"100%"}>
              <HStack overflowX="auto" maxW={"100%"} overflowY={"hidden"}>
                {/* {forYou.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isRandom={false}
                  />
                ))} */}
              </HStack>
            </Box>
          </VStack>
        </VStack>
      </Center>
    
    </>
  );
}
