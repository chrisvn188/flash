import { format } from 'date-fns'
import { uid } from 'uid'

export default class Model {
    constructor() {
        this.projects = [
            {
                name: 'inbox',
                todos: [
                    {
                        id: uid(),
                        title: 'Create a todoapp',
                        dueDate: format(new Date(), 'MMMM/dd/yyyy'),
                    },
                    {
                        id: uid(),
                        title: 'Learn to code',
                        dueDate: format(new Date(), 'MMMM/dd/yyyy'),
                    },
                    {
                        id: uid(),
                        title: 'Clean the house',
                        dueDate: format(new Date(), 'MMMM/dd/yyyy'),
                    },
                ],
                custom: false,
            },
            {
                name: 'today',
                todos: [
                    {
                        id: uid(),
                        title: 'Wake up at 4pm',
                        dueDate: format(new Date(), 'MMMM/dd/yyyy'),
                    },
                    {
                        id: uid(),
                        title: 'Make 150$ today',
                        dueDate: format(new Date(), 'MMMM/dd/yyyy'),
                    },
                ],
                custom: false,
            },
        ]
        this.currentProjectName = 'inbox'
    }

    bindProjectListChanged(callback) {
        this.onProjectListChanged = callback
    }

    bindCurrentProjectNameChanged(callback) {
        this.onCurrentProjectNameChanged = callback
    }

    addProject(name) {
        const lowercaseName = name.toLowerCase()
        const newProject = { name: lowercaseName, todos: [], custom: true }
        this.projects.push(newProject)
        this.onProjectListChanged(this.projects)
    }

    deleteProject(name) {
        this.projects = this.projects.filter((p) => p.name !== name)
        this.onProjectListChanged(this.projects)
    }

    setCurrentActiveProject(name) {
        const lowercaseName = name.toLowerCase()
        this.currentProjectName = lowercaseName
        this.onCurrentProjectNameChanged(this.currentProjectName)
    }
}
