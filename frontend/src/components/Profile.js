import {
  Avatar,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import DetailsField from "./DetailsField";

export default function Profile() {
  const user = useSelector((state) => state.user);
  return user ? (
    <Center my={5}>
      <VStack w={{ base: "100%", md: "80%" }} mt={10}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Center w={{ base: "100%", md: "50%" }}>
            <Avatar src={`${user.photo}`} name={user.name} size={"2xl"} />
          </Center>

          <VStack w={{ base: "100%", md: "50%" }} spacing={10}>
            <Heading>Personal Details</Heading>
            <VStack w={"100%"} alignItems={"flex-start"}>
              <Heading size={"sm"}>Name</Heading>
              <DetailsField leftElement={<FaUserAlt />} value={user.name} />
            </VStack>

            <VStack w={"100%"} alignItems={"flex-start"}>
              <Heading size={"sm"}>Email</Heading>
              <DetailsField leftElement={<FaEnvelope />} value={user.email} />
            </VStack>

            <VStack w={"100%"} alignItems={"flex-start"}>
              <Heading size={"sm"}>Phone</Heading>
              <DetailsField
                leftElement={<FaPhoneAlt />}
                value={user.phone ? user.phone : ""}
              />
            </VStack>
          </VStack>
        </Stack>
        <VStack>
          <VStack w={"100%"} alignItems={"flex-start"} spacing={10}>
            <Heading size={"sm"}>FAQs</Heading>
            {[...Array(5)].map((_, index) => (
              <VStack key={index} w={"100%"} alignItems={"flex-start"}>
                <Heading size={"xs"}>
                  What happens when I update my email address (or mobile
                  number)?
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate amet veniam itaque mollitia voluptatibus. Quos
                  corrupti temporibus quod! Voluptates beatae hic quas. Error
                  fuga ipsa nostrum veniam porro excepturi eaque doloremque
                  expedita, deserunt, praesentium sapiente voluptas consequatur
                  non dolor necessitatibus quos pariatur rerum ad perspiciatis
                  facilis odit tempore. Expedita itaque dolore voluptatem
                  impedit quis modi nulla assumenda porro cupiditate totam
                  beatae, voluptates quisquam enim ex nam rerum neque minima
                  culpa tempora similique quae consectetur ab saepe. Repellat,
                  eos nostrum sequi cumque omnis consequuntur dolorem velit
                  minima, fugiat quibusdam consectetur atque molestias, ut
                  aliquid cupiditate quam iure architecto doloremque nihil
                  ratione.
                </Text>
              </VStack>
            ))}
          </VStack>

          <Button colorScheme="red">Deactivate Account</Button>
        </VStack>
      </VStack>
    </Center>
  ) : null;
}
