import { useOutletContext } from "react-router"
export default function HostVanPricing() {
    const {currentVan} = useOutletContext()
    return (
        <>
        <h3 className="font-bold text-3xl">${currentVan.price}<span>/day</span></h3>
        </>
    )
}