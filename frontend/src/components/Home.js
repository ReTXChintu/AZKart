import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from 'axios'

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the fake store API
        const response = await axios.get("https://fakestoreapi.com/products?limit=6");
        setProducts(response.data); // Set the products array from the API response
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);
  return (
    <SimpleGrid columns={4}>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </SimpleGrid>
  );
}
