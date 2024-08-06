import { useOutletContext } from "react-router"
export default function HostVanPhotos() {
    const {currentVan} = useOutletContext()
    return (
        <>
        <img src={currentVan.imageUrl} width={150} />
        </>
    )
}