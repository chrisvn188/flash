import LogoSrc from './assets/images/logo.png'

export default class View {
    constructor() {
        this.app = this.getElement('#root')
        this.header = this.createElement('header', { class: 'App__header' })
        this.header.appendChild(
            this.createElement('img', {
                class: 'App__logo',
                src: LogoSrc,
                alt: 'Flash',
            })
        )
        this.sidebar = this.createElement('aside', { class: 'App__sidebar' })
        this.main = this.createElement('main', { class: 'App__main' })
        this.app.append(this.header, this.sidebar, this.main)
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    createElement(type, props, ...children) {
        const element = document.createElement(type)
        for (let key in props) {
            element.setAttribute(key, props[key])
        }
        for (let child in children) {
            typeof child === 'string'
                ? element.appendChild(document.createTextNode(child))
                : element.appendChild(child)
        }
        return element
    }
}
