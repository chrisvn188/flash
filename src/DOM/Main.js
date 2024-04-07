import { createElement } from '../Utils'
import { Todo } from './Todo'

const main = document.querySelector('.App__main')

export const renderProjectDetails = (activeProject) => {
    // Remove all old elements
    while (main.lastElementChild) {
        main.removeChild(main.lastElementChild)
    }

    // Render active project
    if (activeProject) {
        main.append(
            createElement('h2', {}, activeProject.title),
            createElement(
                'ul',
                { class: 'todo-list' },
                ...activeProject.todos.map((todo) => Todo(todo))
            )
        )
    } else {
        main.append(createElement('p', null, 'No active project here'))
    }
}
