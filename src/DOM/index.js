import { Header } from './Header.js'
import { Sidebar } from './Sidebar.js'
import { Main } from './Main.js'

const App = document.getElementById('app')

export const render = () => {
    App.append(Header, Sidebar, Main)
}
