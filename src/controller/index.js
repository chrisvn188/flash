export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    onProjectListChanged = (projects) => {
        this.view.displayProjects(projects)
    }

    onCurrentProjectNameChanged = (name) => {
        this.view.changeActiveProject(name)
        this.view.displayCurrentProjectTodos(
            this.model.projects.find((p) => p.name === name)
        )
    }

    handleAddProject = (name) => {
        this.model.addProject(name)
        this.model.setCurrentActiveProject(name)
    }

    handleDeleteProject = (name) => {
        this.model.deleteProject(name)
        this.model.setCurrentActiveProject('inbox')
    }

    handleChangeActiveItem = (name) => {
        this.model.setCurrentActiveProject(name)
    }

    render = () => {
        this.onProjectListChanged(this.model.projects)
        this.onCurrentProjectNameChanged(this.model.currentProjectName)
        this.model.bindProjectListChanged(this.onProjectListChanged)
        this.model.bindCurrentProjectNameChanged(
            this.onCurrentProjectNameChanged
        )
        this.view.bindClickProjectItem(this.handleChangeActiveItem)
        this.view.bindAddProject(this.handleAddProject)
        this.view.bindDeleteProject(this.handleDeleteProject)
    }
}
