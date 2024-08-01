import { useEffect, useState } from "react"


export function Van () {
    const [van, setVan] = useState([])
    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return(
        <div>
            <h1>Vans page goes here 🚐</h1>

        </div>
    )
}
export default Van