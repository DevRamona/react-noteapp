import React, { useState } from "react";
import { Outlet, useParams } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

export default function HostVansDetails() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setCurrentVan(data.vans);
      });
  }, []);

  if (!currentVan) {
    return <h2> Page loading ....</h2>;
  }
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: " #161616",
  };
  return (
    <>
      {/* <p>{currentVan}</p> */}
      <div>
        <Link className="flex" to=".." relative="path">
          <BsArrowLeft />
          <p className="-mt-1">Back to all vans</p>
        </Link>
      </div>
      <div className="flex mt-8">
        <img src={currentVan.imageUrl} width={200} />
        <div className="">
        <h2 className="text-5xl font-bold">{currentVan.name}</h2>
        <p className="font-bold text-3xl">${currentVan.price}/day</p>
        <p className="button px-3 py-3 m-6 bg-amber-950 rounded-md text-white">{currentVan.type}</p> 
        </div>
        
      </div>

      <nav className="text-2xl m-8 flex justify-start ">
        <NavLink
          to="."
          end
          relative="path"
          className="mr-4"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className="mr-4"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          className="mr-4"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ currentVan }} />
    </>
  );
}
