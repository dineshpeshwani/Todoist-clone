import React, { Component } from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

class Navbar extends Component {
  render() {
    return (
      <Flex 
          bg="#DB4C3F"
          w="100vw"
          h="44px"
          padding="0 42px"
          alignItems="center">
        <Flex alignItems="center">
          <Sidebar/>
          <Link to={`/`} style={{marginRight: "20px"}}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M12.527 3.075c.35.104.64.263 1.27.876L19.1 9.123c.374.364.49.505.601.678.11.174.185.351.232.552.042.178.062.34.066.742L20 17.718c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134H14v-4.718c0-.446-.046-.607-.134-.77a.906.906 0 00-.378-.378c-.142-.077-.284-.122-.616-.132L12.718 13h-1.436c-.446 0-.607.046-.77.134a.906.906 0 00-.378.378c-.077.142-.122.284-.132.616l-.002.154V19H5.282c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-6.462c0-.522.02-.703.067-.903.047-.2.121-.378.232-.552l.077-.113c.098-.134.233-.282.524-.565l5.304-5.172c.629-.613.92-.772 1.269-.876a1.82 1.82 0 011.054 0zm-.286.958a.825.825 0 00-.482 0c-.18.054-.326.139-.63.418l-.227.216L5.598 9.84c-.3.293-.385.39-.456.5a.76.76 0 00-.102.242c-.026.112-.037.224-.04.531l.002 6.807.005.073.074.006L8.999 18 9 14.268l.003-.17c.013-.448.083-.749.249-1.058a1.9 1.9 0 01.788-.788c.306-.164.6-.234 1.043-.249l.199-.003h1.45l.17.003c.448.013.749.083 1.058.249.337.18.608.45.788.788.164.306.234.6.249 1.043l.003.199L14.999 18l3.92-.002.073-.006.006-.073.002-.2v-6.615l-.005-.218a1.494 1.494 0 00-.035-.305.747.747 0 00-.102-.242l-.059-.084a3.571 3.571 0 00-.294-.315l-5.407-5.273c-.425-.414-.604-.545-.798-.615l-.06-.019z"></path></svg>
          </Link>
        </Flex>
          <InputGroup>
            <InputLeftElement
            mt= "-1.5"  
              children={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="search_icon"><path d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill="#FFFFFF"></path></svg>
              }
            />
            <Input
                style={{
                  margin: "0",
                  border: "1px solid transparent",
                  borderRadius: "3px",
                  width: "198px",
                  height: "28px",
                  boxSizing: "border-box",
                  outline: "0",
                  color: "#ffffff",
                  padding: "5px 5px 0px 34px",
                  background: "hsla(0,0%,100%,.2)", 
                }}
              className="searchbar-icon"
              type="search"
              placeholder={`Search`}
              textColor={"white"}
            />
          </InputGroup>

          <button style={{marginRight: "12px"}}><svg width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" transform="translate(4 3)"><mask id="jd4FBg" fill="#fff"><path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path></mask><g mask="url(#jd4FBg)"><path fill="" d="M-4-3h24v24H-4z"></path></g></g></svg>
          </button>
         <button style={{marginRight: "12px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><g fill="#FFFFFF" fill-rule="nonzero"><g><g><path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z" transform="translate(-564 -480) translate(528 444) translate(36 36)"></path></g></g></g></g></svg>
         </button>
         <button style={{marginRight: "12px"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 11-.001 18.001A9 9 0 0112 3zm0 1a8 8 0 100 16 8 8 0 000-16zm-.093 10.794c.47 0 .802.355.802.856 0 .495-.331.85-.802.85-.471 0-.808-.355-.808-.85 0-.501.337-.856.808-.856zm.128-7.294c1.465 0 2.465.954 2.465 2.213 0 .96-.47 1.639-1.215 2.11-.738.458-.948.8-.948 1.443v.397H11.32v-.562c-.006-.808.366-1.358 1.163-1.86.674-.433.936-.818.936-1.473 0-.758-.559-1.314-1.425-1.314-.878 0-1.436.544-1.5 1.418H9.5c.064-1.32.901-2.372 2.535-2.372z" fill="#FFFFFF" fill-rule="nonzero"></path></svg>
         </button>
         <button>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(0 -1)" fill="#FFFFFF" fill-rule="nonzero"><path d="M12 4c1.101 0 2.13.31 3.004.846L15 5c0 .41.05.81.143 1.192A4.719 4.719 0 0012 5a4.75 4.75 0 00-4.75 4.75c0 3.423-.731 6.248-2.193 8.476a.5.5 0 00.418.774h13.05a.5.5 0 00.418-.774c-1.462-2.227-2.193-5.053-2.193-8.476 0-.363-.04-.716-.118-1.056.332.304.705.563 1.11.768.006.095.008.191.008.288 0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.525 20H14.5a2.5 2.5 0 01-5 0H5.475a1.501 1.501 0 01-1.254-2.323C5.568 15.625 6.25 12.989 6.25 9.75A5.75 5.75 0 0112 4zm1.5 16h-3a1.5 1.5 0 003 0z"></path><circle cx="20" cy="5" r="4" fill="#FF9E13" class="notification_indicator_outline_svg__dot"></circle></g></svg>
         </button>
      </Flex>
    );
  }
}

export default Navbar;
