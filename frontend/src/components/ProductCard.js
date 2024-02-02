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
} from "@chakra-ui/react";
import { fakePriceGenerator } from "./utility";
import {
  AddToCartButton,
  BuyNowButton,
  FavoriteButton,
  ShareButton,
} from "./CommonButtons";

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [discount, setDiscount] = useState(0);
  const [fakePrice, setFakePrice] = useState(0);
  function truncateText(text) {
    if (text.length <= 16) return text;
    else {
      let res = text.slice(0, 16);
      return `${res}...`;
    }
  }

  useEffect(() => {
    const fakePriceFunction = fakePriceGenerator(product.price);

    setDiscount(fakePriceFunction.discount);
    setFakePrice(fakePriceFunction.fakePrice);
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
    >
      <Center p={2} borderRadius={"10px"} w={"100%"} h={"200px"}>
        <Image
          src={product.image}
          alt={product.title}
          borderRadius="md"
          maxH={"190px"}
        />
      </Center>
      <VStack alignItems={"flex-start"}>
        <Text whiteSpace={"nowrap"}>{truncateText(product.title)}</Text>
        <HStack spacing={2}>
          <HStack alignItems={"flex-start"} spacing={2}>
            <Text color={"#938C1A"} textDecor={"line-through"} fontSize={"sm"}>
              ₹{(product.price * 100).toString().split(".")[0]}
            </Text>
            <Text color={"#938C1A"}>
              ₹{(fakePrice * 100).toString().split(".")[0]}
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
            <VStack w={"100%"}>
              <HStack w={"100%"}>
                <Box position={"relative"} w={"300%"}>
                  <Image src={product.image} w={"100%"} />
                  <FavoriteButton product={product} />
                </Box>
                <VStack alignItems={"flex-start"} h={"100%"}>
                  <Box maxH={"200px"} overflowY={"auto"}>
                    <Text textAlign={"justify"}>{product.description}</Text>
                  </Box>
                  <Spacer />
                  <HStack>
                    {discount > 0 && (
                      <>
                        <Text
                          color={"#938C1A"}
                          fontSize={"lg"}
                          fontWeight={"bold"}
                          textDecor={"line-through"}
                        >
                          ₹{(product.price * 100).toString().split(".")[0]}
                        </Text>
                        <Text color={"red"} fontSize={"xs"} fontWeight={"bold"}>
                          {discount}% off
                        </Text>
                      </>
                    )}
                    <Text color={"#938C1A"} fontSize={"lg"} fontWeight={"bold"}>
                      ₹{(fakePrice * 100).toString().split(".")[0]}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>

              <HStack>
                <BuyNowButton />
                <AddToCartButton productId={product.id} />
                <ShareButton />
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
