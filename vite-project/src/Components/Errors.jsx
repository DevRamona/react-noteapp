
import { useRouteError } from "react-router"
export default function Error() {
    const error = useRouteError()
    console.log(error)
    return (
        <>
        <h1>Error : {error.message}</h1>
        <h2> {error.status} - {error.statusText}</h2>
        </>
    )
}