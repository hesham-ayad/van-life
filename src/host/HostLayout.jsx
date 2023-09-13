import { NavLink, Outlet } from "react-router-dom";

export function HostLayout() {
    return (
        <main>
            <nav>
                <NavLink to="." end className={({ isActive }) => isActive ? "activePage" : null}>Dashboard</NavLink>
                <NavLink to="income" className={({ isActive }) => isActive ? "activePage" : null}>Income</NavLink>
                <NavLink to="vans" className={({ isActive }) => isActive ? "activePage" : null}>Vans</NavLink>
                <NavLink to="reviews" className={({ isActive }) => isActive ? "activePage" : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </main>
    )
}