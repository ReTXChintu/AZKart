import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/corousal1.webp";
import image2 from "../images/corousal2.webp";

const Corousel = () => {
    const images = [image1, image2];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box w={"100%"}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Image src={image} alt={`Slide ${index + 1}`}  />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Corousel;
