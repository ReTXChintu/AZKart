import {
  HStack,
  Image,
  Link as ChakraLink,
  Text,
  InputGroup,
  Input,
  IconButton,
  Center,
  VStack,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  AlertDialogOverlay,
  InputRightElement,
  Progress,
  Box,
} from "@chakra-ui/react";
import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaHeart,
  FaHamburger,
  FaCaretRight,
  FaShoppingBag,
  FaWrench,
  FaUserClock,
  FaPowerOff,
  FaHeadset,
} from "react-icons/fa";
import { LoginButton } from "./CommonButtons";
import { useSelector } from "react-redux";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoading = useSelector((state) => state.loader);

  return (
    <Center
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      bgColor={"#2d2d38"}
      zIndex={10}
      position={"sticky"}
      top={0}
    >
      <VStack w={"100%"}>
        <VStack
          w={{ base: "100%", md: "90%", lg: "80%", xl: "70%" }}
          spacing={0}
        >
          <HStack
            px={3}
            py={1}
            spacing={5}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <ChakraLink as={Link} to={"/"}>
              <Image src={logo} w={"70px"}></Image>
            </ChakraLink>

            {/* <VStack alignItems={"flex-start"}> */}
            <InputGroup display={{ base: "none", md: "block" }} w={"60%"}>
              <Input
                size={"md"}
                type="text"
                placeholder="wltoys"
                border={"2px solid black"}
                backgroundColor={"white"}
              />
              <InputRightElement>
                <IconButton
                  icon={<FaSearch color="white" />}
                  maxH={"90%"}
                  backgroundColor={"#ff6e26"}
                  _hover={{ backgroundColor: "#ff6e30" }}
                />
              </InputRightElement>
            </InputGroup>

            {/* <HStack color={"gray.300"} fontSize={"xs"} display={{base: "none", md: "flex"}}>
              <Text>power bank</Text>
              <Text>anbernic</Text>
              <Text>tablet</Text>
              <Text>smart watch</Text>
              <Text>mini pc</Text>
              <Text>zeblaze</Text>
              <Text>walksnail</Text>
              <Text>rccar</Text>
            </HStack> */}
            {/* </VStack> */}

            <HStack>
              <IconButton
                background="transparent"
                color="white"
                _hover={{ background: "transparent" }}
                icon={<FaSearch color="white" />}
                display={{ base: "block", md: "none" }}
              />

              <ChakraLink as={Link} to="/cart">
                <HStack position={"relative"}>
                  <IconButton
                    background="transparent"
                    color="white"
                    _hover={{ background: "transparent" }}
                    icon={<FaShoppingCart fontSize="24px" />} // Adjust the fontSize here
                  />

                  <Text
                    backgroundColor={"red"}
                    width={"20px"}
                    height={"20px"}
                    borderRadius={"full"}
                    fontSize={"xs"}
                    color={"white"}
                    textAlign={"center"}
                    position={"absolute"}
                    top={0}
                    right={0}
                  >
                    {cart ? cart.length : 0}
                  </Text>
                </HStack>
              </ChakraLink>

              <ChakraLink as={Link} to="/favorites">
                <HStack position={"relative"}>
                  <IconButton
                    background="transparent"
                    color="white"
                    _hover={{ background: "transparent" }}
                    icon={<FaHeart fontSize="24px" />} // Adjust the fontSize here
                  />

                  <Text
                    backgroundColor={"red"}
                    width={"20px"}
                    height={"20px"}
                    borderRadius={"full"}
                    fontSize={"xs"}
                    color={"white"}
                    textAlign={"center"}
                    position={"absolute"}
                    top={0}
                    right={0}
                  >
                    {favorites ? favorites.length : 0}
                  </Text>
                </HStack>
              </ChakraLink>

              <HStack spacing={0}>
                {user ? (
                  <Menu>
                    <MenuButton>
                      <Avatar
                        src={`${user.photo}`}
                        name={user.name}
                        size={"sm"}
                      />
                    </MenuButton>
                    <MenuList>
                      <ChakraLink as={Link} to={"/profile"}>
                        <MenuItem as={Button} leftIcon={<FaUser />}>
                          Profile
                        </MenuItem>
                      </ChakraLink>
                      <MenuItem as={Button} leftIcon={<FaShoppingBag />}>
                        My Orders
                      </MenuItem>
                      <MenuItem as={Button} leftIcon={<FaUserClock />}>
                        Become a Seller
                      </MenuItem>
                      <MenuItem as={Button} leftIcon={<FaWrench />}>
                        Settings
                      </MenuItem>
                      <MenuItem as={Button} leftIcon={<FaHeadset />}>
                        Help
                      </MenuItem>
                      <MenuItem
                        onClick={onOpen}
                        as={Button}
                        leftIcon={<FaPowerOff />}
                        _hover={{ color: "red" }}
                      >
                        Log Out
                      </MenuItem>
                      <AlertDialog isOpen={isOpen} onClose={onClose}>
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogBody>
                              Are you sure? Do you want to log out?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button onClick={onClose}>No, Cancel</Button>
                              <Button
                                colorScheme="red"
                                onClick={() => {
                                  localStorage.removeItem("azkartJwt");
                                  onClose();
                                  window.location.reload();
                                }}
                                ml={3}
                              >
                                Yes
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </MenuList>
                  </Menu>
                ) : (
                  <IconButton
                    background="transparent"
                    color="white"
                    _hover={{ background: "transparent" }}
                    icon={<FaUser fontSize={"24px"} />}
                  />
                )}

                <VStack spacing={0} display={{ base: "none", md: "flex" }}>
                  <Text color={"white"}>Hello</Text>
                  {user ? (
                    <Text color={"white"}>{user.name.split(" ")[0]}</Text>
                  ) : (
                    <LoginButton />
                  )}
                </VStack>
              </HStack>
            </HStack>
          </HStack>

          <HStack w={"100%"}>
            <Button
              leftIcon={<FaHamburger />}
              background={"transparent"}
              _hover={{ color: "#ff6e26" }}
              color={"white"}
              rightIcon={<FaCaretRight />}
              fontSize={"sm"}
              fontWeight={"bold"}
            >
              CATEGORIES
            </Button>
            <HStack
              color={"white"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
            >
              <ChakraLink as={Link} to={"/flash-deals"}>
                <Text
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Flash Deals
                </Text>
              </ChakraLink>
              <ChakraLink as={Link} to={"/clearance-sale"}>
                <Text
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Clearance Sale
                </Text>
              </ChakraLink>
              <ChakraLink as={Link} to={"/discover-new"}>
                <Text
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Discover New
                </Text>
              </ChakraLink>
              <ChakraLink as={Link} to={"/top-sellers"}>
                <Text
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  _hover={{ color: "#ff6e26" }}
                >
                  Top Sellers
                </Text>
              </ChakraLink>
            </HStack>
          </HStack>
        </VStack>
        {isLoading && <Box w={"100%"} position={"absolute"} bottom={0}>
          <Progress colorScheme="green" size="xs" isIndeterminate />
        </Box>}
      </VStack>
    </Center>
  );
}
