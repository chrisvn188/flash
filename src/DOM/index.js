import { Header } from './Header.js'

const App = document.getElementById('app')

export const render = () => {
    // display Header
    App.appendChild(Header)
}
