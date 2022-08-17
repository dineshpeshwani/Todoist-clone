import React from 'react';
import {useDisclosure } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Projects from './Project';

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <button ref={btnRef} colorScheme='#DB4C3F' color={"white"} onClick={onOpen}>
            <img src='https://res.cloudinary.com/dct4net75/image/upload/v1660728603/menu-4-24_q7judh.png'></img>
        </button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Projects</DrawerHeader>
  
            <DrawerBody>
              {/* <Input mb="2" placeholder='Type here...' /> */}
              <Projects></Projects>
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
    )
  }