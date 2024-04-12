export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.onProjectListChanged(this.model.projects)
        this.model.bindProjectListChanged(this.onProjectListChanged)
        this.view.bindAddProject(this.handleAddProject)
        this.view.bindDeleteProject(this.handleDeleteProject)
    }

    onProjectListChanged = (projects) => {
        this.view.displayProjects(projects)
    }

    handleAddProject = (name) => {
        this.model.addProject(name)
    }
    handleDeleteProject = (id) => {
        this.model.deleteProject(id)
    }
}
