// import { Spinner } from '@chakra-ui/react';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  getprojects,
  addProject,
  deleteProject,
} from "../ApiCall";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import "../App.css"

class Projects extends Component {
  state = {
    projectName: "",
    projects: [],
    loader: true,
  };

  componentDidMount() {
    getprojects().then((res) =>
      this.setState({
        projects: res,
        loader: false,
      })
    );
  }

  handleSetShow() {
    this.setState({
      setShow: true,
    });
    console.log("setshow");
  }

  handleClose = () => this.setState({ setShow: false });

  handleChange = (e) => {
    this.setState({
      projectName: e.target.value,
    });
  };

  handleSubmit = async (e, val) => {
    e.preventDefault();
    let newList = await addProject(val);
    this.setState({
      projectName: "",
      projects: [newList, ...this.state.projects],
    });
  };

  handleDelete = async (e, val) => {
    await deleteProject(val);
    let newList = this.state.projects.filter((newList) => {
      if (newList.id !== val) {
        return true;
      }
    });
    this.setState({
      projects: newList,
    });
  };

  render() {
    {
      if (this.state.projects.length !== 0) {
        return (
          <div>
            <Button
              variant="unstyled"
              onClick={() => this.handleSetShow()}
              bg="transparent"
              p="0"
              className="AccordianButton"
            >
              <svg width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" transform="translate(4 3)"><mask id="jd4FBg" fill="#fff"><path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path></mask><g mask="url(#jd4FBg)"><path fill="black" d="M-4-3h24v24H-4z"></path></g></g></svg>
            </Button>
            <Modal
              isOpen={this.state.setShow}
              onClose={() => this.handleClose()}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      placeholder="Project name"
                      onChange={this.handleChange}
                      value={this.state.projectName}
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    variant="ghost"
                    onClick={(e) =>
                      this.handleSubmit(e, this.state.projectName)
                    }
                  >
                    Add
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {this.state.projects.map((project, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                <Link to={`/projects/${project.id}`}>
                      <li style={{ marginTop: "0.75rem", fontWeight:"normal", fontSize:"14px", color:"#202020"}}>{project.name}</li>
                  </Link>
                  <button
                    style={{ color: "red" }}
                    onClick={(e) => this.handleDelete(e, project.id)}
                  >
                    <img src="https://res.cloudinary.com/dct4net75/image/upload/v1660729756/trash-9-24_o1el3l.png"></img>
                  </button>
                </div>
              );
            })}
          </div>
        );
      }
    }
  }
}

export default Projects;
