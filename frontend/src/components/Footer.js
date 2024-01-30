import { Box, Image } from "@chakra-ui/react";
import React from "react";
import footerImage from "../images/footerImage.png";

export default function Footer() {
  return (
    <Box w={"100vw"} overflow={"hidden"} mt={5}>
      <Image src={footerImage} />
    </Box>
  );
}
