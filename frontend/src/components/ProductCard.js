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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { fakePriceGenerator } from "./utility";
import { FaCartPlus, FaHeart, FaShare, FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ product, isRandom }) => {
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
    const fakePriceFunction = fakePriceGenerator(product.price, isRandom);

    setDiscount(fakePriceFunction.discount);
    setFakePrice(fakePriceFunction.fakePrice);
  }, [product, isRandom]);

  return (
    <Box
      w={"200px"}
      h={"300px"}
      p="4"
      boxShadow="md"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
      alignItems={"flex-start"}
      onClick={onOpen}
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
          <VStack spacing={0} alignItems={"flex-start"}>
            <Text color={"#938C1A"} textDecor={"line-through"} fontSize={"sm"}>
              ₹{(product.price * 100).toString().split(".")[0]}
            </Text>
            <Text color={"#938C1A"}>
              ₹{(fakePrice * 100).toString().split(".")[0]}
            </Text>
          </VStack>

          <Text color={"red"} fontSize={"xs"}>
            {discount}% off
          </Text>
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
                  <IconButton
                    icon={<FaHeart style={{color: "red"}} />}
                    borderRadius={"full"}
                    position={"absolute"}
                    top={0}
                    right={0}
                  />
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
                <Button colorScheme="whatsapp" rightIcon={<FaShoppingBag />}>
                  Buy Now
                </Button>
                <Button colorScheme="telegram" rightIcon={<FaCartPlus />}>
                  Add to cart
                </Button>
                <Button colorScheme="purple" rightIcon={<FaShare />}>
                  Share
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
