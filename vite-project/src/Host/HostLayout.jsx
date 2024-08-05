import {Link} from "react-router-dom"
import { Outlet } from "react-router-dom"
export default function HostLayout() {
    return (
        <>
        <nav>
        <Link to="/host" className="mr-4">Dashboard</Link>
        <Link to="/host/income" className="mr-4">Income</Link>
        <Link to="/host/reviews" className="mr-4">Reviews</Link>
        </nav>
        <Outlet/>
        </>
    )
}