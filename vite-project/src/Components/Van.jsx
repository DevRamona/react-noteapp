import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import server from "../server";

export default function Van() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const displayedType = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedType.map((van) => (
    <div key={van.id}>
      <Link to={`${van.id}`}>
        <img src={van.imageUrl} alt={van.name} />
        <div className="text-3xl">
          <h3>{van.name}</h3>
          <p>{van.price}</p>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));

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
