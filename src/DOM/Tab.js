import { createElement } from '../Utils'

export const Tab = (project, isActive) => {
    return createElement(
        'button',
        { class: `tab ${isActive ? 'active' : ''}` },
        createElement('span', { class: 'tab__label' }, project.title)
    )
}
