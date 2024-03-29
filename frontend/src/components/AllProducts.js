import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function AllProducts({ title, saleName }) {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${serverUrl}/getSaleProducts?saleName=${saleName}&pageNumber=${pageNumber}&pageSize=30`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      const newProducts = result.saleProducts;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      if (newProducts.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    setProducts([]);
    setPageNumber(1);
    setHasMore(true);
    fetchProducts();
    // eslint-disable-next-line
  }, [title, saleName]);

  return (
    <Center bgColor={"#f7f7f7"}>
      <VStack
        w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }}
        alignItems={"flex-start"}
        spacing={10}
        my={15}
      >
        <Heading>{title}</Heading>
        <Box w={"100%"} overflowX={"hidden"} overflowY={"hidden"}>
          <InfiniteScroll
            dataLength={products.length}
            next={fetchProducts}
            hasMore={hasMore}
            loader={
              <Center minH={"40px"}>
                <Spinner />
              </Center>
            }
            endMessage={<p>No more products to load</p>}
            scrollThreshold={0.9}
          >
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              w={"100%"}
              overflowY={"hidden"}
              overflowX={"hidden"}
            >
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </SimpleGrid>
          </InfiniteScroll>
        </Box>
      </VStack>
    </Center>
  );
}
