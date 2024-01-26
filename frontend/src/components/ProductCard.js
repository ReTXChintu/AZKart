import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";
import "../App.css";
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement.scrollWidth > titleElement.clientWidth) {
      titleElement.classList.add("scroll-animation");
    } else {
      titleElement.classList.remove("scroll-animation");
    }
  }, [product.title]);

  return (
    <Card maxW="sm" mx={2} my={2} border={"1px solid black"}>
      <CardBody position={"relative"} overflow="hidden"> {/* Add overflow: hidden */}
        <Center h={"200px"}>
          <Image
            src={product.image}
            alt={product.title}
            borderRadius="lg"
            maxW={"100%"}
            maxH={"200px"}
          />
          <IconButton position={"absolute"} top={0} right={0} borderRadius={"full"} bgColor={"white"} icon={<FaHeart color="grey" />} />
        </Center>
      </CardBody>
      <Divider />
      <CardFooter>
        <VStack w={"100%"}>
          <VStack mt="6" spacing="3" position={"relative"} overflow="hidden" w={"100%"} alignItems={"flex-start"}>
            <Heading
              size="md"
              textOverflow="ellipsis"
              whiteSpace={"noWrap"}
              ref={titleRef}
              maxW={"100%"}
            >
              {product.title}
            </Heading>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </VStack>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="twitter" >
              Buy now
            </Button>
            <IconButton colorScheme="whatsapp" icon={<FaCartPlus />} />
          </ButtonGroup>
        </VStack>
      </CardFooter>
    </Card>
  );
}
