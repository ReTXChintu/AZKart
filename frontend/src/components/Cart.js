import { Center, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Center overflowX="hidden" backgroundColor={"#f7f7f7"}>
      {cartProducts && cartProducts.length > 0 ? (
        <VStack
          w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }}
          my={10}
          alignItems={"flex-start"}
        >
          <Heading size={"md"}>
            My Cart ({cartProducts.length})
          </Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            w={"100%"}
          >
            {cartProducts.map((cartProduct) => (
              <ProductCard key={cartProduct._id} product={cartProduct} />
            ))}
          </SimpleGrid>
        </VStack>
      ) : (
        <Text>Your cart is empty</Text>
      )}
    </Center>
  );
}
