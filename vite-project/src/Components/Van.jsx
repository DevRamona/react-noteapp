import { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams} from "react-router-dom";
import { getVan } from "../getApi";
import server from "../server";

export function loader() {
  return getVan()
}

export default function Van() {
  
  const [error, setErrors] = useState(null);

  const vans = useLoaderData()
  console.log("Vans loader", vans)
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const displayedType = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  console.log("The Displayed Type", displayedType);

  const vanElements = displayedType.map((van) => (
    <div key={van.id}>
      <Link to={`${van.id}`} state={{ search: `?${searchParams.toString()}` }}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="text-3xl">
          <h3>{van.name}</h3>
          <p>{van.price}</p>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));
  
  
  if(error) {
    return <h1 aria-live="assertive">There was an error : {error.message}</h1>
  }

  return (
    <>
      <div className="text-2xl space-x-5 m-8 ">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className="px-3 py-2 bg-orange-400"
        >
          simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className="px-3 py-2 bg-orange-400"
        >
          rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className=" px-3 py-2 bg-orange-400"
        >
          luxury
        </button>
        {typeFilter ? (
          <button onClick={() => setSearchParams({})} className="underline">
            {" "}
            clear filters
          </button>
        ) : null}
      </div>
      <div className="bg-orange-50">{vanElements}</div>
    </>
  );
}
