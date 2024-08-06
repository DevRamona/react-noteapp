import React, { useState } from "react";
import { useParams } from "react-router";
export default function HostVansDetails() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json()) 
      .then((data) => {console.log("data",data);setCurrentVan(data.vans)});
  }, []);

  if (!currentVan) {
    return <h2> Page loading ....</h2>;
  }
  return (
    <>
    {/* <p>{currentVan}</p> */}
      <img src={currentVan.imageUrl} />
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>
    </>
  );
}
