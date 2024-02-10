import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { SeeMore } from "./CommonButtons";

export default function ProductsSlider({ title, query, products }) {
  const containerRef = useRef(null);

  const scrollRightFunction = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const scrollLeftFunction = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  return (
    <VStack
      w={"100%"}
      alignItems={"flex-start"}
      spacing={5}
      my={3}
      bgColor={"white"}
      p={4}
    >
      <HStack w={"100%"} justifyContent={"space-between"}>
        <Heading fontSize={"md"}>{title}</Heading>
        <SeeMore query={query} />
      </HStack>
      <Box position={"relative"} overflow={"hidden"} w={"100%"}>
        <HStack
          ref={containerRef}
          overflowX="auto"
          maxW={"100%"}
          overflowY={"hidden"}
        >
          <Button
            position={"absolute"}
            top={"25%"}
            left={0}
            onClick={scrollLeftFunction}
            zIndex={1}
            minH={"50%"}
            bgColor={"rgba(255, 255, 255, 0.3)"}
          >
            <FaChevronCircleLeft />
          </Button>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          <Button
            position={"absolute"}
            top={"25%"}
            right={0}
            minH={"50%"}
            onClick={scrollRightFunction}
            bgColor={"rgba(255, 255, 255, 0.3)"}
            zIndex={1}
          >
            <FaChevronCircleRight />
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
