import { TodoistApi } from '@doist/todoist-api-typescript'

const api = new TodoistApi('daef48e14e6e5dec874dce59711d1f937664a1d3')

export function getprojects() { 
   return api.getProjects()
    .then((projects) =>  (projects))
    .catch((error) => console.log(error));
}

export function addProject(name) { 
    return  api.addProject({ name: name })
        .then((project) => (project))
        .catch((error) => console.log(error))
    }

export function getProjectById() {
 api.getProject(2296686442)
        .then((project) => console.log(project))
        .catch((error) => console.log(error))        
}   


export function deleteProject(id)
{   
    api.deleteProject(id)
    .then((isSuccess) => console.log(isSuccess))
    .catch((error) => console.log(error))
}

export function getTasks(){
  return api.getTasks()
    .then((tasks) => (tasks))
    .catch((error) => console.log(error))
}

export function addTask (val ,id) {
   return  api.addTask({ content: val, projectId: id })
    .then((task) => (task))
    .catch((error) => console.log(error))
}

export function deleteTask (val) {
    api.deleteTask(val)
        .then((isSuccess) => console.log(isSuccess))
        .catch((error) => console.log(error))
}

