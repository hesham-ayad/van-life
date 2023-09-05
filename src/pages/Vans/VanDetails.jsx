import { Suspense } from "react";

import { Link, Await, useLocation, useLoaderData, defer } from "react-router-dom"

import { getVans } from "../../fetches";

export function loader({ params }) {
    return defer({ vanDets: getVans(params.id) })
}

function VanDetails() {

    const location = useLocation()
    const vanDetsPromise = useLoaderData()

    function renderVanDets(vanDets) {
        return (
            <div>
                <img src={vanDets.imageUrl} alt="van picture" />
                <p>{vanDets.type}</p>
                <p>{vanDets.name}</p>
                <p>${vanDets.price}/day</p>
                <p>{vanDets.description}</p>
                <button>Rent this van</button>
            </div>
        )
    }

    return (
        <main className='vanDetails-main'>
            <Link
                to={location.state ? `..?${location.state.search}` : '..'}
                relative="path"
            >
                Back to {location.state?.searchFilterType ? `all ${location.state.searchFilterType}` : 'all'} vans
            </Link>

            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={vanDetsPromise.vanDets}>
                    {renderVanDets}
                </Await>
            </Suspense>

        </main>
    )
}

export default VanDetails