import { createElement } from '../Utils'
import { Logo } from './Logo.js'

export const Header = (function (logo) {
    return createElement('header', { class: 'App__header' }, logo)
})(Logo)
