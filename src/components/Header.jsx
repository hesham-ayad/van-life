import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" className="main-header-link" >#VANLIFE</Link>
            <nav>
                <NavLink to="/host" className={({isActive}) => isActive ? "activePage" : null}>Host</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "activePage" : null}>About</NavLink>
                <NavLink to="/vans" className={({isActive}) => isActive ? "activePage" : null}>Vans</NavLink>
            </nav>
        </header>
    )
}


export default Header