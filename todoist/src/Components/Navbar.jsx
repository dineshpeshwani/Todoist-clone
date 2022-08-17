import React, { Component } from "react";
import {
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
// import "../App.css";
import Sidebar from "./Sidebar";

class Navbar extends Component {
  render() {
    return (
      <Flex 
          bg="#DB4C3F"
          w="100vw"
          h="10vh"
          alignItems="center">
        <Flex w="150%" justifyContent="space-around" >
          <Sidebar />
          <Heading color="white">Todoist</Heading>
        </Flex>
          <InputGroup>
            <InputLeftElement
            ml="7.5rem" 
              children={
                <img src="https://res.cloudinary.com/dct4net75/image/upload/v1660734090/search-9-24_uv4x81.png" />
              }
            />
            <Input
              w="45%"
            ml="7.5rem" 

              className="searchbar-icon"
              type="search"
              bg="#FFFFFF33"
              width="10%"
              variant="flushed"
              border="none"
              borderRadius="2rem"
              placeholder={``}
              textColor={"white"}
            />
          </InputGroup>
      </Flex>
    );
  }
}

export default Navbar;
