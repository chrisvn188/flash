import { format } from 'date-fns'
import { uid } from 'uid'

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

    handleToggleTodo = (id) => {
        this.model.toggleTodo(id)
    }

    handleDeleteTodo = (id) => {
        this.model.deleteTodo(id)
    }

    handleAddTodo = (title, dueDate) => {
        this.model.addTodo(title, dueDate)
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
        this.view.bindToggleTodo(this.handleToggleTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindAddTodo(this.handleAddTodo)
    }
}
