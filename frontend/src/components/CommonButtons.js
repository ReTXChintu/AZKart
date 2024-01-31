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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaKey, FaUser } from "react-icons/fa";

export function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
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
                      <Input type="email" placeholder="Enter email" />
                    </InputGroup>

                    <InputGroup w={"50%"}>
                      <InputLeftElement>
                        <FaKey />
                      </InputLeftElement>
                      <Input
                        type={isPassword ? "password" : "text"}
                        placeholder="Enter Password"
                      />
                      <InputRightElement>
                        <IconButton
                          icon={isPassword ? <FaEye /> : <FaEyeSlash />}
                          onClick={() => setIsPassword(!isPassword)}
                        />
                      </InputRightElement>
                    </InputGroup>

                    <Button variant={"solid"} colorScheme="blue">
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
                    <Input type="text" placeholder="Enter name" />
                  </InputGroup>

                  <InputGroup w={"50%"}>
                    <InputLeftElement>
                      <FaEnvelope />
                    </InputLeftElement>
                    <Input type="email" placeholder="Enter email" />
                  </InputGroup>

                  <InputGroup w={"50%"}>
                    <InputLeftElement>
                      <FaKey />
                    </InputLeftElement>
                    <Input
                      type={isPassword ? "password" : "text"}
                      placeholder="Enter Password"
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
                    />
                  </InputGroup>

                  <Button variant={"solid"} colorScheme="blue">
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
