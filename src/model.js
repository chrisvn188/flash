export default class Model {
    constructor() {
        this._projects = [
            { name: 'work', todos: [] },
            { name: 'personal', todos: [] },
            { name: 'study', todos: [] },
        ]
    }
    get projects() {
        return this._projects
    }

    addProject(name) {
        const newProject = { name, todos: [] }
        this._projects.push(newProject)
    }

    deleteProject(name) {
        this._projects = this._projects.filter((p) => p.name !== name)
    }
}
