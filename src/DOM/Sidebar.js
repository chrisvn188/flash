import { createElement } from '../Utils'
import * as MainUI from './Main'
import { Tab } from './Tab'
import * as ProjectsLogic from '../Logic/ProjectList'

class Project {
    constructor(title) {
        this.title = title
        this.todos = []
        this.active = false
    }
}

const sidebar = document.querySelector('.App__sidebar')

export const renderProjects = (projects) => {
    while (sidebar.lastElementChild) {
        sidebar.removeChild(sidebar.lastElementChild)
    }

    const projectsSection = createElement(
        'section',
        { class: 'projects-section' },
        createElement('h2', null, 'projects'),
        createElement(
            'menu',
            { class: 'tab-list' },
            createElement('input', {
                type: 'text',
                class: 'project-creating-input',
                placeholder: 'Eg: Work',
            }),
            ...projects.map((item) =>
                createElement('li', { class: 'tab-item' }, Tab(item))
            )
        )
    )

    sidebar.appendChild(projectsSection)
}

sidebar.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab')

    if (tab) {
        // change active tab
        sidebar.querySelector('.active')?.classList.remove('active')
        tab.classList.add('active')
        // render active project details on Main
        const title = tab.querySelector('.tab__label')?.textContent
        ProjectsLogic.changeActiveProject(title)
        MainUI.renderProjectDetails(ProjectsLogic.getActiveProject())
    }
})

sidebar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // add project to list
        ProjectsLogic.addNewProjectToList(new Project(e.target.value))
        ProjectsLogic.changeActiveProject(e.target.value)
        renderProjects(ProjectsLogic.getProjects())
        MainUI.renderProjectDetails(ProjectsLogic.getActiveProject())
    }
})
