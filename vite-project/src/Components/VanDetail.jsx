
import React, { useState } from "react"
import { useParams} from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    console.log(params.id)
    const[van, setVans] = useState(null)
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [params.id])
    return (
        <div className="bg-orange-50">
        {van ? (
            <div className="text-3xl">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="bg-orange-900 mt-4 text-white p-3">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}
