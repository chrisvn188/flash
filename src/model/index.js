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
            complete: true,
          },
          {
            id: uid(),
            title: 'Learn to code',
            dueDate: format(new Date(), 'MMMM/dd/yyyy'),
            complete: false,
          },
          {
            id: uid(),
            title: 'Clean the house',
            dueDate: format(new Date(), 'MMMM/dd/yyyy'),
            complete: false,
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
    this.projects = this.projects.filter(p => p.name !== name)
    this.onProjectListChanged(this.projects)
  }

  setCurrentActiveProject(name) {
    const lowercaseName = name.toLowerCase()
    this.currentProjectName = lowercaseName
    this.onCurrentProjectNameChanged(this.currentProjectName)
  }

  toggleTodo(id) {
    this.projects = this.projects.map(project => {
      return {
        ...project,
        todos: project.todos.map(todo => {
          return {
            ...todo,
            complete: todo.id === id ? !todo.complete : todo.complete,
          }
        }),
      }
    })
    this.onProjectListChanged(this.projects)
    this.onCurrentProjectNameChanged(this.currentProjectName)
  }

  deleteTodo(id) {
    this.projects = this.projects.map(project => {
      return {
        ...project,
        todos: project.todos.filter(todo => todo.id !== id),
      }
    })
    this.onProjectListChanged(this.projects)
    this.onCurrentProjectNameChanged(this.currentProjectName)
  }

  addTodo(title, dueDate) {
    const newTodo = { id: uid(), title, dueDate, complete: false }
    this.projects = this.projects.map(project => {
      return {
        ...project,
        todos:
          project.name === this.currentProjectName
            ? [...project.todos, newTodo]
            : project.todos,
      }
    })
    this.onProjectListChanged(this.projects)
    this.onCurrentProjectNameChanged(this.currentProjectName)
  }
}
