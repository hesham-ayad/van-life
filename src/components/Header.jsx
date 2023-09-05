import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedin") ?? null)

    function clearStorge() {
        localStorage.clear()
    }

    return (
        <header>
            <Link to="/" className="main-header-link" >#VANLIFE</Link>
            <nav>
                <NavLink to="/host" className={({ isActive }) => isActive ? "activePage" : null}>Host</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "activePage" : null}>About</NavLink>
                <NavLink to="/vans" className={({ isActive }) => isActive ? "activePage" : null}>Vans</NavLink>
                {!isLoggedIn ? <NavLink to="/login" className={({ isActive }) => isActive ? "activePage" : null}>Login</NavLink> : null}
                <button onClick={clearStorge}>clear store</button>
            </nav>
        </header>
    )
}


export default Header