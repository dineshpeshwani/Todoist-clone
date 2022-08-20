import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectTask from "./Components/ProjectTask";
import Homepage from "./Components/HomePage";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={
          <>
          <Navbar/>
          <Homepage/>
          </>
          }/>
            <Route path="/projects/:code" 
            element={
              <>
            <Navbar/>
            <ProjectTask/>
            </>
          }></Route>
            <Route path="*" element={<h1>Page Not Found!!</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
