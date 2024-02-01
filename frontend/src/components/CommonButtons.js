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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaKey, FaUser } from "react-icons/fa";
import { changeToken } from "../redux/slices/tokenSlice";
import { useDispatch } from "react-redux";
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
      // localStorage.setItem('azkartJwt', result.token);
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
