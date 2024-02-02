import { Center, Image } from "@chakra-ui/react";
import React from "react";
import footerImage from "../images/footerImage.png";

export default function Footer() {
  return (
    <Center overflow={"hidden"} bgColor={"#f7f7f7"}>
      <Image src={footerImage} />
    </Center>
  );
}
