import { Link, useParams } from "react-router-dom";
import React from "react";
import server from "../server";
export default function HostVans() {
  const [vans, setVans] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => {
        console.log("anything", data.vans);
        setVans(data.vans);
      });
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
