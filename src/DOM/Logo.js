import LogoSrc from '../assets/images/logo.png'

export const Logo = (function () {
    const logo = new Image()
    logo.src = LogoSrc
    logo.alt = 'Flash'
    logo.classList.add('App__logo')
    return logo
})()
