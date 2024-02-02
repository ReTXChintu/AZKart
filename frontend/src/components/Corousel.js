import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image4 from "../images/corousal4.jpeg";
import image5 from "../images/corousal5.jpg";
import image6 from "../images/corousal6.jpg";

const Corousel = () => {
  const images = [image4, image5, image6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Corousel;
