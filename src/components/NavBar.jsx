import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <NavLink data-replace='Bot Collection' className='nav-link' to='/collection'><span>Bot Collection</span></NavLink>
            <NavLink data-replace='Enlisted Bots' className='nav-link' to='/enlisted'><span>Enlisted Bots</span></NavLink>
        </header>
    )
}