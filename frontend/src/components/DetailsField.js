import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { FaPen } from "react-icons/fa";

export default function DetailsField({ leftElement, value }) {
  const [isReadable, setIsReadable] = useState(true);
  const inputGroupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputGroupRef.current &&
        !inputGroupRef.current.contains(event.target)
      ) {
        setIsReadable(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <InputGroup w={"100%"} ref={inputGroupRef}>
      <InputLeftElement>{leftElement}</InputLeftElement>
      <Input value={value} isDisabled={isReadable}></Input>
      <InputRightElement>
        <FaPen cursor={"pointer"} onClick={() => setIsReadable(!isReadable)} />
      </InputRightElement>
    </InputGroup>
  );
}
