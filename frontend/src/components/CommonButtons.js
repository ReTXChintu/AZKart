import { useState } from "react";
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
  useDisclosure,
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  FaCartPlus,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaHeart,
  FaKey,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { changeToken } from "../redux/slices/tokenSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slices/favoriteSlice";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export function LoginButton() {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch(`${serverUrl}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: logEmail, password: logPass }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Account creation Failed",
          description: result,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: "Login successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      localStorage.setItem("azkartJwt", result.token);
      dispatch(changeToken(result.token));
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async () => {
    try {
      const response = await fetch(`${serverUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast({
          title: "Account creation failed",
          description: result,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: "Account created.",
        description: result,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Text
        as={Button}
        background={"transparent"}
        color={"white"}
        _hover={{
          background: "transparent",
          textDecoration: "underline",
        }}
        onClick={onOpen}
      >
        Login
      </Text>
      <Drawer
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
        size={{ base: "full", sm: "full", md: "xl", lg: "lg", xl: "lg" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {isLogin ? "Login" : "Create an account"}
          </DrawerHeader>
          <DrawerBody>
            {isLogin ? (
              <>
                <Center>
                  <VStack w={"100%"}>
                    <InputGroup w={"50%"}>
                      <InputLeftElement>
                        <FaEnvelope />
                      </InputLeftElement>
                      <Input
                        type="email"
                        placeholder="Enter email"
                        value={logEmail}
                        onChange={(e) => setLogEmail(e.target.value)}
                      />
                    </InputGroup>

                    <InputGroup w={"50%"}>
                      <InputLeftElement>
                        <FaKey />
                      </InputLeftElement>
                      <Input
                        type={isPassword ? "password" : "text"}
                        placeholder="Enter Password"
                        value={logPass}
                        onChange={(e) => setLogPass(e.target.value)}
                      />
                      <InputRightElement>
                        <IconButton
                          icon={isPassword ? <FaEye /> : <FaEyeSlash />}
                          onClick={() => setIsPassword(!isPassword)}
                        />
                      </InputRightElement>
                    </InputGroup>

                    <Button
                      variant={"solid"}
                      colorScheme="blue"
                      onClick={login}
                    >
                      Login
                    </Button>

                    <HStack>
                      <Text>New to this website?</Text>
                      <Text
                        color={"blue"}
                        cursor={"pointer"}
                        onClick={() => {
                          setIsLogin(false);
                        }}
                      >
                        Create an account
                      </Text>
                    </HStack>
                  </VStack>
                </Center>
              </>
            ) : (
              <Center>
                <VStack w={"100%"}>
                  <InputGroup w={"50%"}>
                    <InputLeftElement>
                      <FaUser />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup w={"50%"}>
                    <InputLeftElement>
                      <FaEnvelope />
                    </InputLeftElement>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup w={"50%"}>
                    <InputLeftElement>
                      <FaKey />
                    </InputLeftElement>
                    <Input
                      type={isPassword ? "password" : "text"}
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <IconButton
                        icon={isPassword ? <FaEye /> : <FaEyeSlash />}
                        onClick={() => setIsPassword(!isPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>

                  <InputGroup w={"50%"}>
                    <InputLeftElement>
                      <FaKey />
                    </InputLeftElement>
                    <Input
                      type={isPassword ? "password" : "text"}
                      placeholder="Enter Confirm Password"
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </InputGroup>

                  <Button variant={"solid"} colorScheme="blue" onClick={signup}>
                    Sign Up
                  </Button>

                  <HStack>
                    <Text>Already have an account?</Text>
                    <Text
                      color={"blue"}
                      cursor={"pointer"}
                      onClick={() => {
                        setIsLogin(true);
                      }}
                    >
                      Login
                    </Text>
                  </HStack>
                </VStack>
              </Center>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function FavoriteButton({ productId }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const favorites = useSelector((state) => state.favorites);
  const isFavorite =
    favorites.find((favoriteProduct) => favoriteProduct._id === productId) !==
    undefined;

  const addToFav = async () => {
    const response = await fetch(`${serverUrl}/addToFav`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(`Failed to add to favorites: ${result.message}`);
      return;
    }

    dispatch(addToFavorites(result.product));
  };

  const removeFromFav = async () => {
    const response = await fetch(`${serverUrl}/removeFromFav`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(`Failed to remove from favorites: ${result.message}`);
      return;
    }

    dispatch(removeFromFavorites(result.productId));
  };

  const toggleFavorite = async (event) => {
    event.stopPropagation();
    !isFavorite ? await addToFav() : await removeFromFav();
  };

  return (
    <IconButton
      icon={<FaHeart style={{ color: isFavorite ? "red" : "" }} />}
      borderRadius={"full"}
      position={"absolute"}
      top={0}
      right={0}
      onClick={toggleFavorite}
    />
  );
}

export function BuyNowButton() {
  return (
    <Button colorScheme="whatsapp" rightIcon={<FaShoppingBag />}>
      Buy Now
    </Button>
  );
}

export function AddToCartButton({ productId }) {
  const cart = useSelector((state) => state.cart);
  const isInCart =
    cart.find((cartProduct) => cartProduct._id === productId) !== undefined;
  const toast = useToast();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const addToCartfunction = async () => {
    const response = await fetch(`${serverUrl}/addToCart`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast({
        title: "Adding to cart failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log("Adding to cart failed: ", result.message);
      return;
    }

    dispatch(addToCart(result.product));
  };

  const removeFromCartFunction = async () => {
    const response = await fetch(`${serverUrl}/removeFromCart`, {
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast({
        title: "Adding to cart failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    dispatch(removeFromCart(result.productId));
  };

  return isInCart ? (
    <Button
      colorScheme="telegram"
      rightIcon={<FaShoppingCart />}
      onClick={removeFromCartFunction}
    >
      Remove from cart
    </Button>
  ) : (
    <Button
      colorScheme="telegram"
      rightIcon={<FaCartPlus />}
      onClick={addToCartfunction}
    >
      Add to cart
    </Button>
  );
}

export function SeeMore({ query }) {
  return (
    <ChakraLink as={Link} to={`/${query}`}>
      <Button variant={"ghost"} fontSize={"xs"}>
        See more
      </Button>
    </ChakraLink>
  );
}
