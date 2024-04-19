import { format } from 'date-fns'
import LogoSrc from '../assets/images/logo.png'

export default class View {
  constructor() {
    this.app = this.getElement('#root')

    // ___________________HEADER______________________ //
    this.header = this.createElement('header', { class: 'App__header' })

    this.logo = this.createElement('img', {
      class: 'App__logo',
      src: LogoSrc,
      alt: 'Flash',
    })

    // ___________________SIDEBAR______________________ //
    this.sidebar = this.createElement('aside', { class: 'App__sidebar' })

    this.projectsSection = this.createElement('section', {
      class: 'projects-section',
    })

    this.projectsSectionHeading = this.createElement(
      'h2',
      { class: 'section-heading' },
      'Projects'
    )

    this.form = this.createElement('form', { class: 'project-form' })

    this.projectInput = this.createElement('input', {
      class: 'project-form__input',
      placeholder: 'Eg. Work',
    })

    this.projectInput.required = true

    this.projectList = this.createElement('menu', { class: 'project-list' })

    this.form.append(this.projectInput)

    this.projectsSection.append(
      this.projectsSectionHeading,
      this.form,
      this.projectList
    )

    // ___________________MAIN______________________ //
    this.main = this.createElement('main', { class: 'App__main' })

    // ___________________RENDERING______________________ //
    this.header.appendChild(this.logo)

    this.sidebar.append(this.projectsSection)

    this.app.append(this.header, this.sidebar, this.main)
  }

  clearProjectInput() {
    this.projectInput.value = ''
  }

  displayProjects(projects) {
    // clear all old children
    while (this.projectList.firstChild) {
      this.projectList.removeChild(this.projectList.firstChild)
    }

    // display new ones
    this.projectList.append(
      ...projects.map(p => {
        const listItem = this.createElement('li', {
          class: 'project-item',
        })

        const projectIcon = this.createElement('i', {
          class: 'tab__icon ri-file-list-2-line',
        })

        const projectTitle = this.createElement(
          'span',
          { class: 'project-title' },
          p.name
        )

        const deleteIcon = this.createElement('i', {
          class: 'ri-delete-bin-6-line',
        })

        const tab = this.createElement(
          'button',
          { class: 'tab' },
          projectIcon,
          projectTitle,
          p.custom
            ? this.createElement(
                'button',
                { class: 'delete-project-button' },
                deleteIcon
              )
            : ''
        )

        listItem.append(tab)

        return listItem
      })
    )
  }

  changeActiveProject(name) {
    for (let child of this.projectList.children) {
      child.classList.remove('active')
      if (child.querySelector('.project-title').textContent === name) {
        child.classList.add('active')
      }
    }
  }

  displayCurrentProjectTodos(currentProject) {
    while (this.main.firstChild) {
      this.main.removeChild(this.main.firstChild)
    }

    const mainHeading = this.createElement('h2', {}, currentProject.name)

    const form = this.createElement('form', {
      class: 'add-todo-form',
      id: 'add-todo-form',
    })

    const titleInput = this.createElement('input', {
      type: 'text',
      placeholder: 'Enter a task...',
      required: true,
      name: 'todoTitle',
    })

    const dateInput = this.createElement('input', {
      type: 'date',
      required: true,
      name: 'todoDue',
    })

    const submitButton = this.createElement(
      'button',
      { type: 'submit' },
      'Create'
    )

    form.append(titleInput, dateInput, submitButton)

    const todos = currentProject.todos

    const todoList = this.createElement('ul', { class: 'todo-list' })

    todoList.append(
      ...todos.map(todo => {
        const li = this.createElement('li', { class: 'todo-item' })
        li.id = todo.id

        const checkbox = this.createElement('input', {
          type: 'checkbox',
        })

        checkbox.checked = todo.complete
        const titleSpan = this.createElement('span', {
          class: 'todo__title',
        })

        const strike = this.createElement('s', {}, todo.title)

        todo.complete
          ? titleSpan.append(strike)
          : (titleSpan.textContent = todo.title)

        const deleteButton = this.createElement(
          'button',
          { class: 'delete-todo-button' },
          this.createElement('i', { class: 'ri-delete-bin-5-line' })
        )

        li.append(checkbox, titleSpan, deleteButton)

        return li
      })
    )
    this.main.append(mainHeading, form, todoList)
  }

  bindClickProjectItem(handler) {
    this.projectList.addEventListener('click', e => {
      if (e.target.closest('.project-item')) {
        handler(
          e.target.closest('.project-item').querySelector('.project-title')
            .textContent
        )
      } else return
    })
  }

  bindToggleTodo(handler) {
    this.main.addEventListener('click', e => {
      if (e.target.type === 'checkbox') {
        handler(e.target.parentElement.id)
      }
    })
  }

  bindDeleteTodo(handler) {
    this.main.addEventListener('click', e => {
      if (e.target.closest('.delete-todo-button')) {
        handler(e.target.closest('.delete-todo-button').parentElement.id)
      }
    })
  }

  bindAddTodo(handler) {
    this.main.addEventListener('submit', e => {
      e.preventDefault()
      const data = new FormData(e.target)
      const title = data.get('todoTitle')
      const dueDate = format(data.get('todoDue'), 'MMMM/dd/yyyy')
      handler(title, dueDate)
    })
  }

  bindAddProject(handler) {
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      if (e.target.firstChild.value) {
        handler(e.target.firstChild.value)
        this.clearProjectInput()
      }
    })
  }

  bindDeleteProject(handler) {
    this.projectList.addEventListener('click', e => {
      if (e.target.parentElement.className === 'delete-project-button') {
        handler(e.target.parentElement.previousSibling.textContent)
      }
    })
  }

  getElement(selector) {
    return document.querySelector(selector)
  }

  createElement(type, props, ...children) {
    let element = document.createElement(type)

    if (props) {
      for (let key in props) {
        element.setAttribute(key, props[key])
      }
    }

    for (let child of children) {
      if (typeof child !== 'string') {
        element.appendChild(child)
      } else {
        element.appendChild(document.createTextNode(child))
      }
    }

    return element
  }
}
