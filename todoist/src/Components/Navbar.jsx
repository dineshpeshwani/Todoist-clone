import React, { Component } from "react";
import { Flex, Input } from "@chakra-ui/react";
import "../App.css";
import Sidebar from "./Sidebar";

class Navbar extends Component {
  render() {
    return (
      <Flex>
        <Flex bg="#DB4C3F" w="100vw" h="10vh" justifyContent= "space-around" justifyItems="center" alignItems="center">
          <Sidebar/>
            <Input
              type="search"
              bg="#FFFFFF33"
              width= "40%"
              placeholder="Search Projects"
              textColor={"white"}
            />
        </Flex>
      </Flex>
    );
  }
}

export default Navbar;
