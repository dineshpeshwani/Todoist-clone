import { Fade, ScaleFade,Textarea } from '@chakra-ui/react'
import {Button, Box, useDisclosure} from "@chakra-ui/react";
import React from 'react';
import "../App.css";

export function TextArea() {
    const { isOpen, onToggle } = useDisclosure()
    return (
      <>
        <Button onClick={onToggle} bg="transparent" mt="0.4rem">
              <span style={{ marginRight: "0.5rem", marginLeft: "-0.75rem" }}>
                <svg width="13" height="13">
                  <path
                    d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                    fill="#DB4C3F"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <span color="black" style={{ fontWeight: "lighter" }}>
                Add task
              </span>
            </Button>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box
            color='black'
            mt='4'
            width="80vh"
            h="5rem"
            rounded='md'
            shadow='md'
          >
            <Textarea placeholder='Task Name'/>
          </Box>
          <Button color="white" bg="#DB4C3F" fontWeight="normal" mt="1rem" float="right">Add Task</Button>
        </ScaleFade>
      </>
    )
  }

