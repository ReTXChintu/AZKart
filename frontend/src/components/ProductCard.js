import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Spacer,
  ModalFooter,
} from "@chakra-ui/react";
import {
  AddToCartButton,
  BuyNowButton,
  FavoriteButton,
} from "./CommonButtons";
import "../App.css";

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(
      Math.floor(
        ((product.fakePrice - product.price) / product.fakePrice) * 100
      )
    );
  }, [product]);

  return (
    <Box
      w={"200px"}
      h={"300px"}
      p="4"
      boxShadow="md"
      transition="transform 0.3s"
      alignItems={"flex-start"}
      bgColor={"#f7f7f7"}
      onClick={onOpen}
      position={"relative"}
      my={3}
      mx={"auto"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
    >
      <Center p={2} borderRadius={"10px"} w={"100%"} h={"200px"}>
        <Image
          src={product.image}
          alt={product.title}
          borderRadius="md"
          maxH={"190px"}
        />
        <FavoriteButton productId={product._id} />
      </Center>
      <VStack alignItems={"flex-start"}>
        <Text noOfLines={1}>{product.title}</Text>
        <HStack spacing={2}>
          <HStack alignItems={"flex-start"} spacing={2}>
            <Text
              color={"#938C1A"}
              fontSize={"xs"}
              fontWeight={"bold"}
              textDecor={"line-through"}
            >
              ₹{product.fakePrice}
            </Text>
            <Text color={"#938C1A"} fontSize={"sm"} fontWeight={"bold"}>
              ₹{product.price}
            </Text>
          </HStack>
          <Box
            bgColor={"#ff6e26"}
            px={2}
            py={1}
            color={"white"}
            borderRadius={"full"}
            position={"absolute"}
            top={0}
            left={0}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {discount}% off
            </Text>
          </Box>
        </HStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack w={"100%"}>
              <Box position={"relative"} w={"50%"}>
                <Image src={product.image} alt={product.name} />
                <FavoriteButton productId={product._id} />
              </Box>
              <VStack alignItems={"flex-start"} h={"100%"} w={"50%"}>
                <Box maxH={"200px"} overflowY={"auto"}>
                  <Text textAlign={"justify"}>{product.description}</Text>
                </Box>
                <Spacer />
                <HStack>
                  {discount > 0 && (
                    <VStack>
                      <Text
                        color={"#938C1A"}
                        fontSize={"sm"}
                        fontWeight={"bold"}
                        textDecor={"line-through"}
                      >
                        ₹{product.fakePrice}
                      </Text>
                      <Text color={"red"} fontSize={"xs"} fontWeight={"bold"}>
                        {discount}% off
                      </Text>
                    </VStack>
                  )}
                  <Text color={"#938C1A"} fontSize={"lg"} fontWeight={"bold"}>
                    ₹{product.price}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <BuyNowButton />
              <AddToCartButton productId={product._id} />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
