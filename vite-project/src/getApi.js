export async function getVan() {
const res = await fetch("/api/vans")
const data = await res.json()
return data.vans

}