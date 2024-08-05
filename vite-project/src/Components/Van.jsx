import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import server from "../server"

export default function Van() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])
  

  const vanElements = vans.map(van => (
    <div key={van.id}>
      <Link to={`/vans/${van.id}`}>
      <img src={van.imageUrl} alt={van.name} />
      <div className="text-3xl">
        <h3>{van.name}</h3>
        <p>{van.price}</p>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        
      </div>
      </Link>
      
    </div>
  ))

  return (
    <div>
      {vanElements}
    </div>
  )
}

