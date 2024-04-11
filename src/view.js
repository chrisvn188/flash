import LogoSrc from './assets/images/logo.png'

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
            placeholder: 'eg: Work',
        })
        this.submitProjectButton = this.createElement(
            'button',
            { class: 'project-form__button', type: 'submit' },
            'Create'
        )
        this.projectList = this.createElement('menu', { class: 'project-list' })
        this.form.append(this.projectInput, this.submitProjectButton)
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
        // clear all old children then display new ones
        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild)
        }

        this.projectList.append(
            ...projects.map((p) => {
                const listItem = this.createElement('li', {
                    class: 'project-item',
                })

                const tab = this.createElement(
                    'button',
                    { class: 'tab' },
                    this.createElement('i', {
                        class: 'tab__icon ri-file-list-2-line',
                    }),
                    this.createElement('span', { class: 'tab__label' }, p.name)
                )

                listItem.append(tab)

                return listItem
            })
        )
    }

    bindAddProject(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const text = e.target.querySelector('input').value
            if (text) {
                handler(text)
                this.clearProjectInput()
            }
        })
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    createElement(type, props, ...children) {
        const element = document.createElement(type)
        for (let key in props) {
            element.setAttribute(key, props[key])
        }
        for (let child of children) {
            typeof child === 'string'
                ? element.appendChild(document.createTextNode(child))
                : element.appendChild(child)
        }
        return element
    }
}
