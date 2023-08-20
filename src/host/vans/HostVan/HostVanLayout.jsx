import { createContext, useState, useEffect } from "react"

import { NavLink, Link, Outlet, useParams } from "react-router-dom"

const HostVanContext = createContext()

function HostVanLayout() {
    const [van, setVan] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params])

    return (
        <div className='host-vans-cont'>
            <Link to="/host/vans">back to vans</Link>

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
                            <NavLink to={`/host/vans/${van.id}`} end className={({ isActive }) => isActive ? "activePage" : null}>Details</NavLink>
                            <NavLink to={`/host/vans/${van.id}/pricing`} className={({ isActive }) => isActive ? "activePage" : null}>Pricing</NavLink>
                            <NavLink to={`/host/vans/${van.id}/photos`} className={({ isActive }) => isActive ? "activePage" : null}>Photos</NavLink>
                        </nav>
                    </div>
                    :
                    null
            }
            <HostVanContext.Provider value={van}>
                <Outlet />
            </HostVanContext.Provider>
        </div>
    )
}

export default HostVanLayout

export { HostVanContext }