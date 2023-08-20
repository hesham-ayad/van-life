import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";


function HostVansList() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    })

    const vansJsx = vans.length > 0 ? 
    vans.map(van => {
        return (
            <Link to={`/host/vans/${van.id}`} key={van.id}>
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
    :
    null

    return (
        <div className='host-vans-cont'>
            {vansJsx ? vansJsx : <h3>loading...</h3>}
        </div>
    )
}

export default HostVansList