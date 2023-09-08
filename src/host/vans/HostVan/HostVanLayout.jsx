import { Suspense } from "react"

import { NavLink, Link, Outlet, Await, useLoaderData, defer } from "react-router-dom"

import { requireAuth } from "../../../utils"
import { getVan } from "../../../fetches"

export async function loader({ params, request }) {
    await requireAuth(request)
    return defer({ van: getVan(params.id) })
}

function HostVanLayout() {

    const vanPromise = useLoaderData()

    function renderVanDetsHeader(van) {
        return (
            <div>
                <img src={van.imageUrl} alt="van image" />
                <div>
                    <p>{van.type}</p>
                    <h4>{van.name}</h4>
                    <p><span>${van.price}</span>/day</p>
                </div>
            </div>
        )
    }

    return (
        <div className='host-vans-cont'>
            <Link to="../vans">
                back to vans
            </Link>

            <div className="host-van-cont">
                <Suspense fallback={<p>Loading...</p>}>
                    <Await resolve={vanPromise.van}>
                        {renderVanDetsHeader}
                    </Await>
                </Suspense>
                <nav>
                    <NavLink to="." end className={({ isActive }) => isActive ? "activePage" : null}>Details</NavLink>
                    <NavLink to={`pricing`} className={({ isActive }) => isActive ? "activePage" : null}>Pricing</NavLink>
                    <NavLink to={`photos`} className={({ isActive }) => isActive ? "activePage" : null}>Photos</NavLink>
                </nav>
            </div>




            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={vanPromise.van}>
                    {van => <Outlet context={van} />}
                </Await>
            </Suspense>
        </div>
    )
}

export default HostVanLayout