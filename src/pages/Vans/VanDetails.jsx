import { Link, useLocation, useLoaderData } from "react-router-dom"

import { getVans } from "../../fetches";

export function loader({ params }) {
    return getVans(params.id)
}


function VanDetails() {

    const location = useLocation()
    const vanDets = useLoaderData()

    return (
        <main className='vanDetails-main'>
            <Link
                to={location.state ? `..?${location.state.search}` : '..'}
                relative="path"
            >
                Back to {location.state?.searchFilterType ? `all ${location.state.searchFilterType}` : 'all'} vans
            </Link>
            <div>
                <img src={vanDets.imageUrl} alt="van picture" />
                <p>{vanDets.type}</p>
                <p>{vanDets.name}</p>
                <p>${vanDets.price}/day</p>
                <p>{vanDets.description}</p>
                <button>Rent this van</button>
            </div>
        </main>
    )
}

export default VanDetails