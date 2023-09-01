import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom"

import { requireAuth } from "../../../utils"

import { getHostVans } from "../../../fetches"

export async function loader({ params }) {
    await requireAuth()
    return getHostVans(params.id)
}

function HostVanLayout() {

    const van = useLoaderData()

    return (
        <div className='host-vans-cont'>
            <Link to="../vans">
                back to vans
            </Link>

            {
                van ?
                    <div className="host-van-cont">
                        <div>
                            <img src={van.imageUrl} alt="van image" />
                            <div>
                                <p>{van.type}</p>
                                <h4>{van.name}</h4>
                                <p><span>${van.price}</span>/day</p>
                            </div>
                        </div>
                        <nav>
                            <NavLink to="." end className={({ isActive }) => isActive ? "activePage" : null}>Details</NavLink>
                            <NavLink to={`pricing`} className={({ isActive }) => isActive ? "activePage" : null}>Pricing</NavLink>
                            <NavLink to={`photos`} className={({ isActive }) => isActive ? "activePage" : null}>Photos</NavLink>
                        </nav>
                    </div>
                    :
                    null
            }
            <Outlet context={van} />
        </div>
    )
}

export default HostVanLayout