import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <NavLink className='nav-link' to='/collection'>Bot Collection</NavLink>
            <NavLink className='nav-link' to='/enlisted'>Enlisted Bots</NavLink>
        </header>
    )
}