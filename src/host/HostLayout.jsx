import {NavLink, Outlet } from "react-router-dom";

function HostLayout() {
    return (
        <main>
            <nav>
                <NavLink to="/host" end className={({isActive}) => isActive ? "activePage" : null}>Dashboard</NavLink>
                <NavLink to="/host/income" className={({isActive}) => isActive ? "activePage" : null}>Income</NavLink>
                <NavLink to="/host/vans" className={({isActive}) => isActive ? "activePage" : null}>Vans</NavLink>
                <NavLink to="/host/reviews" className={({isActive}) => isActive ? "activePage" : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </main>
    )
}

export default HostLayout