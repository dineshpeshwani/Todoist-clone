import React from "react";
import {
  Flex, CloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Slide,
  Box,
} from "@chakra-ui/react";
import Projects from "./Project";
import "../App.css";

export default function Sidebar() {
  
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <button onClick={handleToggle}>
        <svg class="menu_icon" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="#FFFFFF"
            fill-rule="evenodd"
            d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
          ></path>
        </svg>
      </button>
      <Slide direction="left" in={show}>
        <Box
          w="305px"
          h="100vh"
          p="40px"
          color="black"
          mt="44px"
          bg="#FAFAFA"
          shadow="md"
        >
          <Box>
          <CloseButton onClick={handleToggle} float="right" mb="1rem"></CloseButton>
            <Flex
              w="250px"
              h="34px"
              p="0.5rem"
              borderRadius="3px"
              cursor="pointer"
              className="sidebar-icons"
              alignItems="center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="Dd3PmF2g5h93YIf1bCDdiA=="
              >
                <g fill="#246fe0" fill-rule="nonzero">
                  <path
                    d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                    opacity="0.1"
                  ></path>
                  <path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                </g>
              </svg>
              <Text ml="10px" fontWeight="light">
                Inbox
              </Text>
            </Flex>
            <Flex
              w="250px"
              h="34px"
              p="0.5rem"
              borderRadius="3px"
              cursor="pointer"
              className="sidebar-icons"
              alignItems="center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="ONBJEQtK++jnfUWJ3V90Dw=="
              >
                <g fill="#058527" fill-rule="evenodd">
                  <path
                    fill-rule="nonzero"
                    d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                    opacity=".1"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                  ></path>
                  <text
                    font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                    font-size="9"
                    transform="translate(4 2)"
                    font-weight="500"
                  >
                    <tspan x="8" y="15" text-anchor="middle">
                      19
                    </tspan>
                  </text>
                </g>
              </svg>
              <Text ml="10px" fontWeight="light">
                Today
              </Text>
            </Flex>
            <Flex
              w="250px"
              h="34px"
              p="0.5rem"
              borderRadius="3px"
              cursor="pointer"
              className="sidebar-icons"
              alignItems="center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="SWWJ2mDmoJ5jpYGsCY5nBA=="
              >
                <g fill="#692fc2" fill-rule="nonzero">
                  <path
                    d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
                    opacity="0.1"
                  ></path>
                  <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path>
                </g>
              </svg>
              <Text ml="10px" fontWeight="light">
                Upcoming
              </Text>
            </Flex>
            <Flex
              w="250px"
              h="34px"
              p="0.5rem"
              borderRadius="3px"
              cursor="pointer"
              className="sidebar-icons"
              alignItems="center"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="yeJ7DFSh0CB61w0UHm64kQ=="
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                  fill="#eb8909"
                ></path>
              </svg>
              <Text ml="10px" fontWeight="light">
                Filter & Labels
              </Text>
            </Flex>
          </Box>
          <Accordion defaultIndex={[1]} allowMultiple className="accordianBar">
            <AccordionItem>
              <h2>
                <AccordionButton variant="ghost" bg="transparent" className="projectAccordian">
                  <AccordionIcon />
                  <Box flex="1" textAlign="start" ml="0.5rem" >
                    Projects
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Projects/>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Slide>
    </>
  );
}
