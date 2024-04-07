import * as SidebarUI from './Sidebar'
import * as MainUI from './Main'
import * as ProjectsLogic from '../Logic/ProjectList'

export const render = () => {
    SidebarUI.renderProjects(ProjectsLogic.getProjects())
    MainUI.renderProjectDetails(ProjectsLogic.getActiveProject())
}
