import { useOutletContext } from "react-router"
export default function HostVanInfo() {
    const {currentVan} = useOutletContext()
    return (
        <div className="flex flex-wrap w-11/12 gap-5">
        <h4>Name: {currentVan.name}</h4>
            <h4>Category: {currentVan.type}</h4>
            <h4>Description: {currentVan.description}</h4>
            <h4>Visibility: public and private</h4>
        </div>
    )
}