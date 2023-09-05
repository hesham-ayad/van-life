import { Link, useLoaderData } from "react-router-dom";

import { requireAuth } from "../../utils";

import { getHostVans } from "../../fetches";

export async function loader({ request }) {
    await requireAuth(request)
    return getHostVans()
}

function HostVansList() {

    const vans = useLoaderData()

    const vansJsx = vans.map(van => {
        return (
            <Link to={van.id} key={van.id}>
                <div >
                    <img src={van.imageUrl} alt="van image" />
                    <div>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className='host-vans-cont'>
            {vansJsx}
        </div>
    )
}

export default HostVansList 