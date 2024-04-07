import { createElement } from '../Utils'
import LogoSrc from '../assets/images/logo.png'

export const Logo = (function () {
    return createElement('img', {
        src: LogoSrc,
        alt: 'Flash',
        class: 'App__logo',
    })
})()
