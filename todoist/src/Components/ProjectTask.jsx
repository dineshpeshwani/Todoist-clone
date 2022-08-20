import React, { Component } from "react";
import { getTasks, deleteTask, addTask } from "../ApiCall";
import { ScaleFade, Textarea, Button, Flex, Checkbox, Heading, Divider, Box} from '@chakra-ui/react'

class ProjectTasks extends Component {
  state = {
    tasks: [],
    taskName: "",
    setShow: false
  };

  handleToggle = () => {
    let val = this.state.setShow
    this.setState({
      setShow: !val
    })
  }

  id = window.location.href.split("/")[4];

  componentDidMount() {
    getTasks()
      .then((res) => res.filter((x) => x.projectId == this.id))
      .then((res) =>
        this.setState({
          tasks: res,
        })
      );
  }

  handleChange = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleSubmit = async (e, val) => {
    e.preventDefault();
    let newList = await addTask(val, this.id);
    this.setState({
      taskName: "",
      tasks: [...this.state.tasks, newList],
    });
  };

  handleDelete = async (e, val) => {
    //   e.preventDefault()
    await deleteTask(val);
    let newList = this.state.tasks.filter((newList) => {
      if (newList.id !== val) {
        return true;
      }
    });
    this.setState({
      tasks: newList,
    });
  };

  render() {
    let today = new Date();
    {
      console.log(this.state.tasks);
      if (this.state.tasks.length !== 0) {
        return (
          <Box width="100vw">
          <Box width="80vw" p="2.25rem 4rem 0" float="right">
            <Flex flexDir="column" alignItems="flex-start">
              {/* {console.log( typeof [today].toString())} */}
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <Heading
                  fontWeight="200"
                  fontSize="1.5rem"
                  color="black"
                  mb="1rem"
                >
                  {" "}
                  <span style={{ fontSize: "0.75rem" }}>{`${[today]
                    .toString()
                    .substring(0, 10)}`}</span>
                </Heading>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
                      fill="#DB4C3F"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </div>
              </Flex>
              <Divider orientation="horizontal" />

              {this.state.tasks.map((task, index) => {
             return (
               <Box key={index} w="100%">
                <Flex alignItems="center" h="40px">
                   <Checkbox iconColor="white" style={{"marginRight": "1rem"}} onChange={(e) => this.handleDelete(e, task.id)}>{task.content}</Checkbox>
                 </Flex>
                 <Divider></Divider>
               </Box>
             );
           })}
            <Button onClick={this.handleToggle} bg="transparent" mt="0.4rem">
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
        <ScaleFade initialScale={0.9} in={this.state.setShow}>
          <Box
            color='black'
            mt='4'
            width="80vh"
            h="5rem"
            rounded='md'
            shadow='md'
          >
            <Textarea 
            onChange={this.handleChange}
            value={this.state.taskName}
            placeholder='Task Name'/>
          </Box>
          <Button color="white" bg="#DB4C3F" fontWeight="normal" mt="1rem" float="right" onClick={(e) => this.handleSubmit(e, this.state.taskName)}>Add Task</Button>
        </ScaleFade>              
            </Flex>
          </Box>
        </Box>
        );
      }else{
        return (
            <Box width="100vw">
        <Flex width="80vw" p="2.25rem 4rem 0" flexDir="column" float="right">
          <Flex flexDir="column" alignItems="flex-start">
            {/* {console.log( typeof [today].toString())} */}
            <Flex w="100%" alignItems="center" justifyContent="space-between">
              <Heading
                fontWeight="200"
                fontSize="1.5rem"
                color="black"
                mb="1rem"
              >
                {" "}
                <span style={{ fontSize: "0.75rem" }}>{`${[today]
                  .toString()
                  .substring(0, 10)}`}</span>
              </Heading>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
                    fill="#DB4C3F"
                    fill-rule="nonzero"
                  ></path>
                </svg>
              </div>
            </Flex>
            <Divider orientation="horizontal" />
             <Button onClick={this.handleToggle}  bg="transparent" mt="0.4rem">
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
        <ScaleFade initialScale={0.9} in={this.state.setShow}>
          <Box
            color='black'
            mt='4'
            width="80vh"
            h="5rem"
            rounded='md'
            shadow='md'
          >
            <Textarea 
            onChange={this.handleChange}
            value={this.state.taskName}
            placeholder='Task Name'/>
          </Box>
          <Button color="white" bg="#DB4C3F" fontWeight="normal" mt="1rem" float="right" onClick={(e) => this.handleSubmit(e, this.state.taskName)}>Add Task</Button>
        </ScaleFade>             

            <Flex w="100%" p="2rem" justifyContent="center">
              <svg
                width="208px"
                height="190px"
                viewBox="0 0 880 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.53"
                  d="M321.244 482.334H203.876v7.979h117.368v-7.979z"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M544.931 364.248a5.39 5.39 0 015.386 5.386 5.364 5.364 0 01-5.386 5.386 5.364 5.364 0 01-5.386-5.386 5.364 5.364 0 015.386-5.386zm-11.49 12.727c-8.138 1.436-15.16.319-15.678-2.514-.519-2.832 5.705-6.303 13.843-7.779-6.782-4.748-10.931-10.492-9.295-12.846 1.635-2.354 8.497-.439 15.279 4.309-1.436-8.139-.319-15.16 2.514-15.639 2.832-.519 6.303 5.705 7.779 13.843 4.747-6.782 10.492-10.931 12.846-9.295 2.354 1.636.439 8.497-4.269 15.279 8.139-1.436 15.16-.319 15.679 2.514.518 2.832-5.705 6.303-13.844 7.779 6.782 4.747 10.931 10.492 9.296 12.846-1.636 2.354-8.498.439-15.28-4.309 1.436 8.139.319 15.16-2.513 15.639-2.833.519-6.303-5.705-7.779-13.843-4.748 6.782-10.493 10.931-12.846 9.295-2.354-1.636-.439-8.497 4.268-15.279zM588.176 410.405c-6.942-.239-12.527-1.077-9.136-2.473-7.939-3.311-13.524-8.099-12.447-10.612s8.378-1.875 16.317 1.436c-3.271-7.979-3.83-15.279-1.317-16.316 2.554-1.038 7.261 4.587 10.493 12.566 3.311-7.939 8.098-13.524 10.611-12.447 2.514 1.077 1.875 8.378-1.436 16.317 7.979-3.271 15.28-3.83 16.317-1.317 1.037 2.554-4.588 7.261-12.567 10.493 3.511 1.476-2.713 2.274-10.053 2.393 1.237-.997 2.035-2.513 2.035-4.189a5.388 5.388 0 00-5.386-5.385 5.363 5.363 0 00-5.386 5.385c0 1.676.758 3.152 1.955 4.149z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M625.996 353.517a5.388 5.388 0 015.385 5.386 5.362 5.362 0 01-5.385 5.385 5.363 5.363 0 01-5.386-5.385 5.363 5.363 0 015.386-5.386zm-12.886 6.981c-8.298-2.234-14.482-6.183-13.764-8.816.718-2.633 8.019-2.992 16.357-.758-4.309-7.461-5.864-14.602-3.511-15.998 2.394-1.356 7.78 3.551 12.088 11.011 2.234-8.298 6.184-14.482 8.817-13.764 2.633.719 2.992 8.019.758 16.357 7.46-4.309 14.601-5.864 15.997-3.511 1.357 2.394-3.55 7.78-11.01 12.088 8.298 2.234 14.481 6.184 13.763 8.817s-8.019 2.992-16.357.758c4.309 7.46 5.865 14.601 3.511 15.997-2.394 1.357-7.779-3.55-12.088-11.01-2.234 8.298-6.183 14.481-8.816 13.763-2.633-.718-2.992-8.019-.758-16.357-7.461 4.309-14.602 5.865-15.998 3.511-1.356-2.393 3.591-7.779 11.011-12.088z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.28"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M806.517 691.021h8.018c4.149-46.676 32.195-74.083 32.195-74.083a3.975 3.975 0 00.08-5.626c-1.516-1.595-4.069-1.595-5.625-.079 0 0-30.44 29.521-34.668 79.788zm3.75 7.979h-.04.04zM831.051 691.021h8.059c3.232-23.218 19.389-36.782 19.389-36.782 1.675-1.397 1.915-3.95.478-5.625-1.396-1.676-3.949-1.915-5.625-.479 0 0-18.989 15.838-22.301 42.926v-.04zM772.687 691.021h7.978c3.83-66.065 32.714-104.922 32.714-104.922a4.002 4.002 0 00-.798-5.585 4.002 4.002 0 00-5.585.798s-30.44 40.612-34.349 109.669l.04.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.07 699h859.24a4.002 4.002 0 003.989-3.99 4 4 0 00-3.989-3.989H10.07a4 4 0 00-3.99 3.989 4.002 4.002 0 003.99 3.99z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.28"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M74.619 691.021h8.018c-4.707-58.564-40.173-92.993-40.173-92.993-1.596-1.556-4.11-1.516-5.625.08-1.556 1.596-1.516 4.109.08 5.625 0 0 33.072 32.314 37.74 87.288h-.04zM78.927 699h-.04.04zM141.202 691.021h7.979c1.835-25.812 11.489-40.892 11.489-40.892a3.96 3.96 0 00-1.197-5.505 3.96 3.96 0 00-5.505 1.197s-10.891 16.675-12.806 45.24l.04-.04zM94.526 695.21l-.28-4.189h8.019c-5.186-69.535-46.077-110.427-46.077-110.427a3.973 3.973 0 00-5.626 0 3.973 3.973 0 000 5.625s40.254 40.493 44.004 108.991h-.04zM40.39 691.021h8.018c-3.63-31.557-25.771-50.068-25.771-50.068a4.026 4.026 0 00-5.625.479 4.025 4.025 0 00.478 5.625s19.31 16.237 22.86 43.924l.04.04zM330.619 215.602c.319-5.345.599-10.731.918-16.077.239-3.59.598-7.181 1.197-10.731.438-2.554.957-5.027 1.994-7.421.718-1.715 1.636-3.391 2.833-4.787 9.016-10.572 14.801 5.545 23.976 2.633 7.78-2.473 6.543-10.372 13.963-14.003 3.99-1.955 9.694-.917 13.325 3.631 7.061 8.896 9.375 18.75 12.726 29.521l-70.892 17.234h-.04zm-22.34 24.336l127.182-30.719-1.875-7.739-127.182 30.718 1.875 7.74zm99.376-23.976c.558 1.795 1.316 4.667 1.875 8.577a8.28 8.28 0 005.665 6.542c2.872.918 6.622 2.115 10.133 3.232a3.81 3.81 0 012.673 3.55 3.897 3.897 0 01-2.474 3.711 9369.088 9369.088 0 01-13.085 4.986c-3.909 14.562-14.681 24.216-29.083 24.575-10.412.279-18.71-1.715-25.293-4.987a34.941 34.941 0 0023.299-23.936c1.915-6.742 1.715-13.604-.24-19.828l26.57-6.422h-.04zm165.481 115.254a7.048 7.048 0 017.061 7.061 7.048 7.048 0 01-7.061 7.061 7.049 7.049 0 01-7.062-7.061 7.049 7.049 0 017.062-7.061zm11.37 23.657a7.05 7.05 0 017.061 7.061 7.048 7.048 0 01-7.061 7.061 7.049 7.049 0 01-7.062-7.061 7.05 7.05 0 017.062-7.061zm-39.615 9.455a5.388 5.388 0 015.385 5.386 5.362 5.362 0 01-5.385 5.385 5.363 5.363 0 01-5.386-5.385 5.364 5.364 0 015.386-5.386zm68.179-3.75c-8.298-2.234-14.482-6.184-13.764-8.817s8.019-2.992 16.357-.758c-4.309-7.46-5.865-14.601-3.511-15.997 2.394-1.357 7.78 3.55 12.088 11.01 2.234-8.298 6.184-14.481 8.817-13.763s2.992 8.019.758 16.357c7.46-4.309 14.601-5.865 15.997-3.511 1.357 2.394-3.55 7.779-11.01 12.088 8.298 2.234 14.481 6.183 13.763 8.816-.718 2.633-8.019 2.993-16.357.758 4.309 7.461 5.865 14.602 3.511 15.998-2.394 1.356-7.779-3.551-12.088-11.011-2.234 8.298-6.183 14.482-8.816 13.764-2.633-.718-2.993-8.019-.758-16.357-7.461 4.309-14.602 5.865-15.998 3.511-1.356-2.394 3.59-7.78 11.011-12.088zm-98.778 24.495a7.048 7.048 0 017.061 7.061 7.048 7.048 0 01-7.061 7.061 7.048 7.048 0 01-7.061-7.061 7.048 7.048 0 017.061-7.061zm118.286 4.747a7.048 7.048 0 017.061 7.061 7.049 7.049 0 01-7.061 7.062 7.049 7.049 0 01-7.061-7.062 7.048 7.048 0 017.061-7.061zm-41.011 11.131a5.388 5.388 0 015.386 5.385 5.364 5.364 0 01-5.386 5.386 5.364 5.364 0 01-5.386-5.386 5.363 5.363 0 015.386-5.385zm-63.033 22.979c1.037.08 1.476 1.596.599 2.194-3.551 2.194-8.298 5.426-9.575 5.226-.957-.16-1.356-1.556-.439-2.194 2.912-1.795 5.825-3.67 8.897-5.146.199-.08.359-.12.558-.12l-.04.04zm60.041 12.726l8.497 14.761 15.399-8.897-8.497-14.76-15.399 8.896zm-43.365 2.593l8.497 14.761 14.761-8.498-8.497-14.76-14.761 8.497zm26.529 7.101l8.498 14.761 14.761-8.497-8.498-14.761-14.761 8.497zm26.53 7.101l8.537 14.761 15.4-8.896-8.498-14.761-15.399 8.896h-.04zm-43.365 2.594l8.498 14.76 14.76-8.497-8.497-14.761-14.761 8.498zm75.719-24.057c-3.63-6.423-7.141-12.925-10.811-19.348-.399-.838-.12-1.796 1.117-1.796.558.08.678.24.878.479 4.069 6.224 7.739 12.687 11.369 19.149l11.171-6.462c.598-.28.638-.16.838-.12 1.037.319 1.236 1.556.359 2.194l-11.211 6.463c2.873 5.186 5.745 10.412 8.697 15.559.599 1.157-1.117 2.393-1.994 1.316-3.272-5.027-6.304-10.173-9.256-15.399l-16.077 9.295 8.497 14.761 14.442-8.338s.199-.159.678-.159c1.037.119.638 2.154.638 2.154l-14.561 8.418 7.061 12.207c.599 1.197-1.236 2.474-2.074 1.197l-7.061-12.208-15.4 8.897 3.711 6.423c.598 1.237-1.237 2.433-2.075 1.197l-3.71-6.423-9.016 5.226-1.317-1.995 9.136-5.266-8.497-14.761-14.761 8.498 4.947 8.537c.598 1.197-1.237 2.473-2.075 1.197l-4.947-8.537-14.76 8.497 3.51 6.064c.599 1.276-1.276 2.394-2.074 1.197l-3.511-6.064-20.545 11.848c-1.237.559-2.514-1.157-1.197-2.074l20.545-11.849-8.497-14.761-20.626 11.889c-1.236.598-2.513-1.157-1.196-2.075l20.625-11.888-8.498-14.761-18.79 10.851a1.101 1.101 0 01-1.516-.359 1.166 1.166 0 01-.159-.957c.08-.319.279-.599.598-.798l18.711-10.811-14.841-25.692c-.439-.878-.239-1.875 1.197-1.795.319.079.518.079.838.598l14.84 25.692 14.761-8.498-9.216-15.997c-.398-.838-.239-1.835 1.157-1.795.599.119.718.279.918.598l9.216 15.998 10.133-5.825s.239-.16.718-.16c1.037.16.598 2.155.598 2.155l-10.253 5.904 8.498 14.761 14.761-8.498-13.325-23.098c-.439-.918-.16-1.955 1.277-1.756.558.16.638.32.797.559l13.325 23.099 15.399-8.897-7.5-13.005c-.439-.838-.239-1.835 1.157-1.796.359.04.598.08.918.599l7.5 13.005 8.298-4.787s.279-.16.758-.16c1.117.24 1.396 1.556.439 2.235l-8.298 4.787 8.497 14.761 16.117-9.296zm-151.358 46.038c-4.388-9.933-9.854-19.708-15.359-28.524l1.675-.918-41.809-67.142s31.357 30.121 86.969 35.147v-9.016c-50.306-35.546-90.48-70.852-117.249-96.424-6.303-6.263-15.439-8.577-23.856-6.263l-6.463-14.961c3.152-1.236 8.856-3.151 15.439-3.63 6.423-.479 13.684.439 19.987 4.987l3.511-4.867c-7.54-5.426-16.237-6.663-23.897-6.104-11.21.798-20.266 5.386-20.266 5.386l-2.514 1.276 8.697 20.187a24.62 24.62 0 00-12.487 19.588c-2.234 29.402-4.587 59.841-4.587 59.841l-33.112 53.019 20.346 11.21c12.407 6.822 25.612 11.53 39.136 14.083l57.727 54.615-82.581 81.185 13.284 11.729s71.77-15.16 109.151-56.69l70.652 64.19 6.902-4.788c-23.338-54.934-46.357-98.418-69.216-137.076l-.08-.04zm-162.25 12.327v90.64l-66.902-66.902-5.625 5.625 66.902 66.902h-94.629v7.979h94.629l-36.064 36.064a61.114 61.114 0 00-10.173-.838 62.2 62.2 0 00-35.227 10.892c-16.875-27.966-47.553-46.677-82.58-46.677-2.953 0-5.865.12-8.777.399.239-3.67.359-7.38.359-11.13 0-66.663-62.155-124.709-116.85-154.55-7.54-61.876 40.014-151.398 151.318-187.542 59.722-19.389 73.286-120.999 186.506-141.744 105.639-19.349 168.074 47.035 209.962 86.091a166.442 166.442 0 0083.22 41.969c102.887 19.189 184.829 69.416 191.053 196.638 3.83 78.911-67.661 147.05-116.77 134.324 36.144 45.639 13.244 130.852-61.757 132.488l-71.37.479v-90.041l66.902 66.902 5.625-5.625-66.902-66.902h94.629v-7.979h-94.629l66.902-66.903-5.625-5.625-147.449 147.449 5.626 5.625 66.902-66.902v90.081l-258.514 1.795v-1.037c0-27.767-18.152-51.344-43.245-59.443l40.014-40.013h.558v-.559l.08-.08-.08-.08V486.364h-3.87v-3.989H203.796v7.978h113.219z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M479.345 477.987c8.138 18.431 12.726 37.62 7.659 53.178-3.869 9.017-9.415 17.155-15.997 24.495l70.652 64.19 6.902-4.787c-23.338-54.934-46.357-98.419-69.216-137.076z"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M429.278 587.136c.04 1.157.04 2.314.04 3.471 0 59.761-48.512 108.273-108.273 108.273-59.762 0-108.273-48.512-108.273-108.273 0-59.761 48.511-108.273 108.273-108.273 39.774 0 74.562 21.503 93.392 53.498l-5.864 5.785c-17.195-30.599-49.948-51.304-87.488-51.304-55.333 0-100.294 44.921-100.294 100.294s44.921 100.294 100.294 100.294 99.935-44.602 100.294-99.656a213.696 213.696 0 007.939-4.069l-.04-.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M330.54 631.14l17.553-17.513a99.851 99.851 0 00-.638 3.909c-1.516 12.088.558 26.969 14.681 38.338l4.986-6.223c-11.449-9.216-13.005-21.343-11.768-31.117 1.276-10.134 5.505-17.873 5.505-17.873l-6.303-4.747-29.642 29.601 5.626 5.665v-.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  d="M566.713 641.592l-25.094-27.048s31.676 15.559 47.554-11.968"
                  stroke="#DB4C3F"
                  stroke-width="7.979"
                  stroke-miterlimit="1.5"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M534.478 508.266c-26.011 18.112-43.045 48.272-43.045 82.342 0 55.333 44.92 100.293 100.293 100.293 55.374 0 100.294-44.92 100.294-100.293 0-55.373-44.92-100.294-100.294-100.294-18.431 0-35.665 4.987-50.506 13.644l41.849 60.679-6.582 4.547-42.009-60.918zm91.039-20.545c-10.612-3.511-21.982-5.386-33.791-5.386-20.106 0-38.936 5.505-55.053 15.04l-25.852-37.501-6.582 4.548 25.731 37.301c-28.085 19.549-46.476 52.102-46.476 88.885 0 59.761 48.511 108.272 108.272 108.272 59.762 0 108.273-48.511 108.273-108.272 0-45.121-27.686-83.858-66.942-100.095l21.503-77.434a4.012 4.012 0 00-.679-3.471c-.758-.997-1.914-1.556-3.191-1.556H510.821v7.979h134.683l-19.907 71.729-.08-.039z"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M501.765 430.073a6.776 6.776 0 016.782 6.782 6.776 6.776 0 01-6.782 6.782 6.776 6.776 0 01-6.782-6.782 6.776 6.776 0 016.782-6.782z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M407.695 215.922c.558 1.795 1.316 4.667 1.875 8.577a8.283 8.283 0 005.665 6.543c2.872.917 6.622 2.114 10.133 3.231a3.81 3.81 0 012.673 3.551 3.895 3.895 0 01-2.474 3.71c-6.263 2.394-13.085 4.987-13.085 4.987-3.91 14.561-14.681 24.215-29.083 24.574-10.412.28-18.71-1.715-25.293-4.986a34.942 34.942 0 0023.299-23.937c1.914-6.742 1.715-13.604-.24-19.827l26.57-6.423h-.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M393.532 232.199c.04 3.869-.04 7.739-.119 11.609 0 2.194 1.715 4.029 3.909 4.069 2.194 0 4.03-1.715 4.069-3.91.08-3.949.16-7.899.12-11.848 0-2.194-1.835-3.99-4.029-3.95-2.194 0-3.95 1.835-3.95 4.03z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M330.619 215.603c.319-5.346.599-10.732.918-16.078.239-3.59.598-7.181 1.197-10.731.438-2.553.957-5.027 1.994-7.42.718-1.716 1.636-3.391 2.833-4.788 9.016-10.572 14.801 5.546 23.976 2.633 7.78-2.473 6.543-10.372 13.963-14.003 3.99-1.954 9.694-.917 13.325 3.631 7.061 8.896 9.375 18.75 12.726 29.521"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M361.059 264.353s-110.387-4.069-143.659 16.676c-14.482 9.056-18.91 28.165-9.854 42.646 9.056 14.482 28.165 18.91 42.647 9.854a232442.572 232442.572 0 00110.866-69.216v.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M381.125 222.344c1.955 6.224 2.155 13.086.24 19.828-3.351 11.808-12.368 20.505-23.299 23.936-19.109-9.255-24.096-28.604-24.854-32.155l47.953-11.569-.04-.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  d="M433.625 201.433L306.43 232.157l1.874 7.756 127.194-30.725-1.873-7.755z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.8"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M364.131 307.079l-8.697-20.186 2.513-1.277s9.056-4.588 20.266-5.386c7.7-.558 16.357.679 23.897 6.104l-3.511 4.867c-6.303-4.548-13.564-5.465-19.987-4.986-6.543.478-12.287 2.393-15.439 3.63l6.463 14.96c8.457-2.314 17.553 0 23.857 6.264 26.769 25.572 66.942 60.878 117.249 96.424v9.016c-55.613-4.987-86.97-35.147-86.97-35.147l41.809 67.142s-1.037.558-2.832 1.596c-39.854 22.46-88.485 22.699-128.539.598a240808.16 240808.16 0 00-20.346-11.21l33.112-53.02s2.314-30.439 4.588-59.841a24.618 24.618 0 0112.487-19.588l.08.04z"
                  fill="#DB4C3F"
                ></path>
                <path
                  opacity="0.53"
                  d="M528.574 423.85c1.037.08 1.476 1.596.599 2.195-3.551 2.194-8.298 5.425-9.575 5.226-.957-.16-1.356-1.556-.439-2.195 2.912-1.795 5.825-3.67 8.897-5.146.199-.08.359-.12.558-.12l-.04.04zm60.041 12.727l8.497 14.76 15.399-8.896-8.497-14.761-15.399 8.897zm-43.365 2.593l8.497 14.761 14.761-8.498-8.497-14.761-14.761 8.498zm26.53 7.101l8.497 14.761 14.761-8.498-8.498-14.761-14.76 8.498zm26.529 7.101l8.537 14.761 15.4-8.897-8.498-14.76-15.399 8.896h-.04zm-43.365 2.593l8.498 14.761 14.761-8.497-8.498-14.761-14.761 8.497zm75.719-24.056c-3.63-6.423-7.141-12.926-10.811-19.349-.399-.837-.12-1.795 1.117-1.795.559.08.678.239.878.479 4.069 6.223 7.739 12.686 11.37 19.149l11.17-6.463c.598-.279.638-.159.838-.12 1.037.32 1.236 1.556.359 2.195l-11.211 6.462c2.873 5.187 5.745 10.413 8.697 15.559.599 1.157-1.117 2.394-1.994 1.317-3.272-5.027-6.304-10.173-9.256-15.399l-16.077 9.295L624.24 458l14.442-8.338s.2-.16.678-.16c1.038.12.639 2.155.639 2.155l-14.562 8.417 7.061 12.208c.599 1.197-1.236 2.473-2.074 1.197l-7.061-12.208-15.399 8.896 3.71 6.423c.598 1.237-1.237 2.434-2.075 1.197l-3.71-6.423-9.016 5.226-1.317-1.994 9.136-5.266-8.497-14.761-14.761 8.497 4.947 8.538c.598 1.197-1.237 2.473-2.075 1.196l-4.947-8.537-14.76 8.498 3.51 6.064c.599 1.276-1.276 2.393-2.074 1.196l-3.511-6.064-20.545 11.849c-1.237.559-2.514-1.157-1.197-2.074l20.545-11.849-8.497-14.761-20.625 11.889c-1.237.598-2.514-1.157-1.197-2.075l20.625-11.888-8.497-14.761-18.791 10.851a1.101 1.101 0 01-1.516-.359c-.199-.279-.239-.638-.159-.958.08-.319.279-.598.598-.797l18.711-10.812-14.841-25.692c-.439-.877-.239-1.875 1.197-1.795.319.08.518.08.838.599l14.84 25.691 14.761-8.497-9.216-15.998c-.398-.837-.239-1.835 1.157-1.795.599.12.719.279.918.599l9.216 15.997 10.133-5.824s.239-.16.718-.16c1.037.16.598 2.154.598 2.154l-10.253 5.905 8.498 14.76 14.761-8.497-13.325-23.099c-.439-.917-.16-1.954 1.277-1.755.558.16.638.319.797.559l13.325 23.098 15.399-8.896-7.5-13.006c-.439-.837-.239-1.835 1.157-1.795.359.04.599.08.918.599l7.5 13.005 8.298-4.787s.279-.16.758-.16c1.117.239 1.396 1.556.439 2.234l-8.298 4.788 8.497 14.76 16.117-9.295z"
                  fill="#DB4C3F"
                ></path>
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </Box>
        )
      }
    }
  }
}

export default ProjectTasks;
