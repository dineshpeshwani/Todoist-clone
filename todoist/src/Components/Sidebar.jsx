import React from "react";
import { Flex, List, useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Projects from "./Project";
import { MdCheckCircle } from "react-icons/md";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="#DB4C3F"
        color={"white"}
        onClick={onOpen}
      >
        <img src="https://res.cloudinary.com/dct4net75/image/upload/v1660728603/menu-4-24_q7judh.png"></img>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader></DrawerHeader>

          <DrawerBody mb="-25rem">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Inbox
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Today
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Upcoming
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Filters and Labels
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerBody>
            {/* <DrawerHeader>Projects</DrawerHeader> */}
            <Flex flexDir="row" justifyContent="space-between">
              {/* <Flex> */}
                {/* <Input mb="2" mr="2" placeholder="Add New Project..." /> */}
                {/* <Button>+</Button>
              </Flex> */}

              <Accordion defaultIndex={[1]} allowMultiple w="80%" border="none">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Projects
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {/* <Flex>
                      <Input mb="2" mr="2" placeholder="Add New Project..." />
                      <Button>+</Button>
                    </Flex> */}
                    <Projects></Projects>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Flex w= "10%">
                {/* <Input mb="2" mr="2" placeholder="Add New Project..." /> */}
                <Button>+</Button>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
