import Header from "./Header"
import { Outlet } from "react-router"
import Footer from "./Footer"
export default function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}