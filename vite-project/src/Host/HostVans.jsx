import React, { useState } from "react";
import { useParams } from "react-router";
export default function HostVans() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h2> Page loading ....</h2>;
  }
  return (
    <>
      <img src={currentVan.imageUrl} />
      <h2>{currentVan.name}</h2>
      <p>{currentVan.price}</p>
      <p>{currentVan.type}</p>
    </>
  );
}
