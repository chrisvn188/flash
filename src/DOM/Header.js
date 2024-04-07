import { Logo } from './Logo.js'

export const Header = (function (logo) {
    const header = document.createElement('header')
    header.classList.add('App__header')
    header.appendChild(logo)
    return header
})(Logo)
