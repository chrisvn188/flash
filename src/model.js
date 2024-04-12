import { format } from 'date-fns'
import { uid } from 'uid'

export default class Model {
    constructor() {
        this.projects = [
            {
                name: 'work',
                todos: [
                    {
                        id: uid(),
                        title: 'Create a todoapp',
                        dueDate: format(new Date(), 'MM/dd/yyyy'),
                        complete: false,
                    },
                    {
                        id: uid(),
                        title: 'Have a meeting at 3pm',
                        dueDate: format(new Date(), 'MM/dd/yyyy'),
                        complete: true,
                    },
                ],
            },
            { name: 'personal', todos: [] },
            { name: 'study', todos: [] },
        ]
        this.currentIndex = 0
    }

    bindProjectListChanged(callback) {
        this.onProjectListChanged = callback
    }

    addProject(name) {
        const newProject = { name, todos: [] }
        this.projects.push(newProject)
        this.onProjectListChanged(this.projects)
    }

    deleteProject(name) {
        this.projects = this.projects.filter((p) => p.name !== name)
        this.onProjectListChanged(this.projects)
    }
}
