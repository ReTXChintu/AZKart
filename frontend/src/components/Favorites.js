import { Center, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function Favorites() {
  const favoriteProducts = useSelector((state) => state.favorites);
  return (
    <Center overflowX="hidden" backgroundColor={"#f7f7f7"}>
      {favoriteProducts && favoriteProducts.length > 0 ? (
        <VStack w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }} my={10} alignItems={"flex-start"}>
          <Heading size={"md"}>My Favorites ({favoriteProducts.length})</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} w={"100%"}>
            {favoriteProducts.map((favoriteProduct) => (
              <ProductCard
                key={favoriteProduct._id}
                product={favoriteProduct}
              />
            ))}
          </SimpleGrid>
        </VStack>
      ) : (
        <Text>No Favorites Start by adding some popular products</Text>
      )}
    </Center>
  );
}
