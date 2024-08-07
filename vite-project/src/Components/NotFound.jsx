import{Link} from "react-router-dom"

export default function NotFound () {
    return (
        <>
        <h1 className="text-2xl text-black m-10">Sorry, the page you're looking for is not found </h1>
        <Link to="/"><button className="px-5 py-2 text-white bg-black m-8">Return to home</button></Link>
        </>
    )
}