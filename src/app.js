import Controller from './controller'
import Model from './model'
import View from './view'

const app = new Controller(new Model(), new View())
app.view.displayProjects(app.model.projects)
app.view.bindAddProject(app.handleAddProject.bind(this))

export default app
