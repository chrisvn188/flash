import { createElement } from '../Utils'

export const Tab = (project) => {
    return createElement(
        'button',
        { class: `tab ${project.active ? 'active' : ''}` },
        createElement('span', { class: 'tab__label' }, project.title),
        createElement('button', { class: 'delete-project-button' }, 'x')
    )
}
