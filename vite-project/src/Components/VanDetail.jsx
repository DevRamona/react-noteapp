
import React, { useState } from "react"
import { useParams, useLocation, Link} from "react-router-dom"
// import { BsArrowLeft } from "react-icons/bs";

export default function VanDetail() {
    const params = useParams()
    console.log(params.id)
    const location = useLocation()
    const[van, setVans] = useState(null)
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [params.id])
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return (

        
        <div className="bg-orange-50">
            <Link relative="path" to= {`..${search}`}> <div className="text-5xl"> Back to {type}vans </div></Link>
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
