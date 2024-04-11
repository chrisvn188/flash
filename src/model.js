import { format } from 'date-fns'
import { uid } from 'uid'

export default class Model {
    constructor() {
        this._projects = [
            {
                name: 'work',
                todos: [
                    {
                        id: uid(),
                        title: 'Create a todoapp',
                        dueDate: format(new Date(), 'MM/dd/yyyy'),
                    },
                    {
                        id: uid(),
                        title: 'Have a meeting at 3pm',
                        dueDate: format(new Date(), 'MM/dd/yyyy'),
                    },
                ],
            },
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
