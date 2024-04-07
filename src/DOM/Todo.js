import { createElement } from '../Utils'

export const Todo = (todo) => {
    return createElement(
        'li',
        { class: 'todo-item' },
        createElement(
            'div',
            { class: 'todo__left-group' },
            createElement('input', { type: 'checkbox' }),
            createElement('span', { class: 'todo__title' }, todo.title)
        )
    )
}
