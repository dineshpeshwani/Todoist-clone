// import { Spinner } from '@chakra-ui/react';
import React, { Component } from 'react';
import {getprojects, addProject, getProjectById, deleteProject} from "../ApiCall"

class Projects extends Component {
    state = {
        projects : [], 
        loader: true
      }
    
      componentDidMount(){
        getprojects()
        .then((res)=>
          this.setState({
            projects: res,
            loader: false
          })
        )
        }
    
        handleDelete =   async (e, val) => 
        { 
        //   e.preventDefault()
         await deleteProject(val)
          let newList  = this.state.projects.filter((newList) => {
            if(newList.id !== val){
              return true
            }
          })
          this.setState({
            projects: newList
          })
        }
    
    render() { 
        {  
            if(this.state.projects.length !== 0){
              return (
                <div>
                {this.state.projects.map((project) => {
                  return(
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <ui>
                        <li style={{marginTop: "0.75rem"}}>{project.name}</li>
                    </ui>
                    <button style={{color:"red"}} 
                    onClick={(e) => this.handleDelete(e, project.id)}
                    >   
                    <img src='https://res.cloudinary.com/dct4net75/image/upload/v1660729756/trash-9-24_o1el3l.png'></img>
                    </button>
                  </div>
                  )
                })}
                </div>
              );
            }
    }
}
}
 
export default Projects;