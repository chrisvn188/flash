import * as Sidebar from './Sidebar'
import * as Main from './Main'
import mockData from '../data.json'

let currentProjectIndex = 0
const projects = mockData

export const getProjects = () => {
    return projects
}

export const render = () => {
    Sidebar.renderProjects(projects, currentProjectIndex)
    Main.renderProjectDetails(projects, currentProjectIndex)
}
