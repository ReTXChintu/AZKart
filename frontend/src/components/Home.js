import { Box, Center, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Corousel from "./Corousel";
import ProductsSlider from "./ProductsSlider";
import { useDispatch } from "react-redux";
import { toggleLoader } from "../redux/slices/loaderSlice";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export default function Home() {
  const [flashSale, setFlashSale] = useState([]);
  const [discoverNew, setDiscoverNew] = useState([]);
  const [hotSales, setHotSales] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFlashDeals = async () => {
      dispatch(toggleLoader());
      const response = await fetch(
        `${serverUrl}/getSaleProducts?saleName=${"Flash Deal"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(`Error fetching product: ${result.message}`);
      }

      setFlashSale(result.saleProducts);
      dispatch(toggleLoader());
    };

    const getNewProducts = async () => {
      dispatch(toggleLoader());
      const response = await fetch(
        `${serverUrl}/getSaleProducts?saleName=${"New"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(`Error fetching product: ${result.message}`);
      }

      setDiscoverNew(result.saleProducts);
      dispatch(toggleLoader());
    };

    const getHotSales = async () => {
      dispatch(toggleLoader());
      const response = await fetch(
        `${serverUrl}/getSaleProducts?saleName=${"Hot Sale"}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.log(`Error fetching product: ${result.message}`);
      }

      setHotSales(result.saleProducts);
      dispatch(toggleLoader());
    };

    getFlashDeals();
    getNewProducts();
    getHotSales();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Center overflowX="hidden" backgroundColor={"#f7f7f7"}>
        <VStack w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }}>
          <Box w={"100%"}>
            <Corousel />
          </Box>

          <ProductsSlider
            title={"Fla⚡️h Deals"}
            query={"flash-deals"}
            products={flashSale}
          />

          <ProductsSlider
            title={"Discover New"}
            query={"discover-new"}
            products={discoverNew}
          />

          <ProductsSlider
            title={"H🔥t Sales"}
            query={"hotSales"}
            products={hotSales}
          />
        </VStack>
      </Center>
    </>
  );
}
