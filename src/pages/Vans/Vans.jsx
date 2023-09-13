import { Suspense } from "react";

import { Link, Await, useSearchParams, useLoaderData, defer } from "react-router-dom"

import { getVans } from "../../fetches";

export function loader() {

    return defer({ vans: getVans() })
}

export function Vans() {

    const vansPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    function renderVans(vans) {
        const filtredVansArr = typeFilter
            ? vans.filter(van => van.type === typeFilter)
            : vans



        const vansJsxArr = filtredVansArr.map(van => {
            return (
                <div className='van-cont' key={van.id}>
                    <Link
                        to={van.id}
                        state={searchParams.size
                            ? {
                                search: searchParams.toString(),
                                searchFilterType: typeFilter
                            }
                            : null
                        }
                    >

                        <img className='van-img'
                            src={van.imageUrl}
                            title={`a picture of the ${van.name} van`}
                            alt={`a picture of the ${van.name} van`}
                        />

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

        return (
            <div className='vans-selection-cont'>
                {
                    vansJsxArr !== null ?
                        vansJsxArr
                        :
                        null
                }
            </div>
        )
    }




    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <main className='vans-main'>
            <div className='vans-filter-cont'>

                {
                    typeFilter ?
                        <button onClick={() => handleFilterChange("type", null)} type='button' >clear filter</button>
                        : null
                }

                <button className={typeFilter === 'simple' ? 'selected' : null}
                    onClick={() => handleFilterChange("type", "simple")}
                    type='button' >
                    simple
                </button>

                <button className={typeFilter === 'rugged' ? 'selected' : null}
                    onClick={() => handleFilterChange("type", "rugged")}
                    type='button' >
                    rugged
                </button>

                <button className={typeFilter === 'luxury' ? 'selected' : null}
                    onClick={() => handleFilterChange("type", "luxury")}
                    type='button' >
                    luxury
                </button>
            </div>

            <h1>Check out our vans</h1>

            <Suspense fallback={<p>Loading...</p>}>
                <Await resolve={vansPromise.vans}>
                    {renderVans}
                </Await>
            </Suspense>
        </main>
    )
}