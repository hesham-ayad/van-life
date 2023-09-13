import { Suspense } from "react";

import { Link, Await, useLoaderData, defer } from "react-router-dom";

import { requireAuth } from "../../utils";

import { getHostVans } from "../../fetches";

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export function HostVansList() {

    const vansPromise = useLoaderData()

    function renderVans(vans) {

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
            <>
                {vansJsx}
            </>
        )

    }


    return (
        <div className='host-vans-cont'>
            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={vansPromise.vans}>
                    {renderVans}
                </Await>
            </Suspense>
        </div>
    )
}