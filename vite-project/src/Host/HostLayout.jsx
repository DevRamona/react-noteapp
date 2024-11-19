import {Link, NavLink} from "react-router-dom"
import { Outlet } from "react-router-dom"
export default function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
         textDecoration: "underline",
          color: " #161616"
    }
    return (
        <>
        <nav>
        <NavLink to="." end className="mr-4"style={({isActive}) => isActive ? activeStyle : null }>Dashboard Display</NavLink>
        <NavLink to="income" className="mr-4"style={({isActive}) => isActive ? activeStyle : null }>Income</NavLink>
        <NavLink to="vans" end className="mr-4"style={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
        <NavLink to="reviews" className="mr-4"style={({isActive}) => isActive ? activeStyle : null }>Reviews</NavLink>
        </nav>
        <Outlet/>
        </>
    )
}