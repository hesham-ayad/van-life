import { useEffect, useState } from "react"

import { useParams, Link } from "react-router-dom"

function VanDetails() {

    const [vanDets, setVanDets] = useState({})
    const params = useParams()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVanDets(data.vans))
    }, [params ])

    return (
        <main className='vanDetails-main'>
            <Link to='/vans'>Back to all vans</Link>
            {
                vanDets ?
                <div>
                    <img src={vanDets.imageUrl} alt="van picture" />
                    <p>{vanDets.type}</p>
                    <p>{vanDets.name}</p>
                    <p>${vanDets.price}/day</p>
                    <p>{vanDets.description}</p>
                    <button>Rent this van</button>
                </div>
                :
                <h2>Loading...</h2>
            }
        </main>
    )
}

export default VanDetails