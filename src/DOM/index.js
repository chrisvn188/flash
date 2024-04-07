import { Header } from './Header.js'
import { Sidebar } from './Sidebar.js'
import { Main } from './Main.js'

const App = document.getElementById('app')

export const render = () => {
    // display Header
    App.appendChild(Header)

    // display Sidebar
    App.appendChild(Sidebar)

    // display Main
    App.appendChild(Main)
}
