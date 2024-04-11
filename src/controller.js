export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    onProjectListChanged = (projects) => {
        this.view.displayProjects(projects)
    }

    handleAddProject = (name) => {
        this.model.addProject(name)
        console.log(this.model.projects)
        this.onProjectListChanged(this.model.projects)
    }
}
