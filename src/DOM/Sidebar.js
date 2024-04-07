import { createElement } from '../Utils'
import * as Main from './Main'
import { ProjectTabs } from './ProjectTabs'

const sidebar = document.querySelector('.App__sidebar')

export const renderProjects = (projects, currentProjectIndex) => {
    const projectsSection = createElement(
        'section',
        { class: 'projects-section' },
        createElement('h2', null, 'projects'),
        ProjectTabs(projects, currentProjectIndex)
    )

    sidebar.appendChild(projectsSection)

    sidebar.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab')

        if (tab) {
            sidebar
                .querySelector('[class="tab active"]')
                ?.classList.remove('active')
            tab.classList.add('active')
            console.log(tab.textContent)

            // rerender main
            const title = tab.querySelector('.tab__label')?.textContent
            Main.renderProjectDetails(
                projects,
                projects.findIndex((item) => item.title === title)
            )
        }
    })
}
