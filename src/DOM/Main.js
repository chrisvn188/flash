import { createElement } from '../Utils'
import { Todo } from './Todo'

const main = document.querySelector('.App__main')

export const renderProjectDetails = (projects, currentProjectIndex) => {
    // Remove all old elements
    while (main.lastElementChild) {
        main.removeChild(main.lastElementChild)
    }

    // Rerender new elements
    const activeProject = projects[currentProjectIndex]
    const { title, todos } = activeProject
    main.append(
        createElement('h2', {}, title),
        createElement(
            'ul',
            { class: 'todo-list' },
            ...todos.map((todo) => Todo(todo))
        )
    )
}
