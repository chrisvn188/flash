import { createElement } from '../Utils'
import { Tab } from './Tab'

export const ProjectTabs = (projects, currentIndex) => {
    return createElement(
        'menu',
        { class: 'tab-list project-tabs' },
        ...projects.map((item, index) =>
            createElement(
                'li',
                { class: 'tab-item' },
                Tab(item, index === currentIndex)
            )
        )
    )
}
