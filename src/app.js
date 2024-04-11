import Controller from './controller'
import Model from './model'
import View from './view'

const app = new Controller(new Model(), new View())
app.view.displayProjects(app.model.projects)

export default app
