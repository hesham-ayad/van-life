import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])
    
    const vansJsx = vans.length ?
    vans.map(van => {
        return (
            <div className='van-cont' key={van.id}>
                <Link to={`/vans/${van.id}`}>
                    <img className='van-img' src={van.imageUrl} alt={`picture of the ${van.name} van`} />
                    <div className='van-details-cont'>
                        <h2>{van.name}</h2>
                        <p>
                            <span>${van.price}</span>
                            <span>/day</span>
                        </p>
                    </div>
                </Link>
                <p>{van.type}</p>
            </div>
        )
    })
    :
    null

    return (
        <main className='vans-main'>
            <h1>Check out our vans</h1>
            <div className='vans-selection-cont'>
                {
                    vansJsx !== null ?
                    vansJsx
                    :
                    null
                }
            </div>
        </main>
    )
}

export default Vans