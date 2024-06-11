import { useParkStore } from "../store/useParkStore";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Map } from "../components/Map";
import { ParkImage } from "../components/parkComponents/ParkImage";

export const ParkInfoPage = () => {
  const { fetchParkData, parkData, loading, error } = useParkStore();
  const { parkName } = useParams();

  useEffect(() => {
    fetchParkData(`https://parkhive.onrender.com/parks`);
    console.log(parkData);
  }, [fetchParkData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const parkInfo = parkData.find(
    (park) => park.name.toLowerCase().replace(/ /g, "-") === parkName
  );
  if (!parkInfo) {
    return (
      <>
      <div>Park not found</div>
      <Link to={"/"}>Back to home page</Link>
      </>
    )
    
  }

  return (
    <>
      <div key={parkInfo._id}>
        <h4>{parkInfo.name}</h4>
        <p>{parkInfo.rate}</p>
        <p>{parkInfo.opening_hours}</p>
        <p>{parkInfo.address}</p>
        <p>{parkInfo.parking_info}</p>
        <Map position={[parkInfo.location.latitude, parkInfo.location.longitude]} parkName={parkInfo.name}/>
        <p>{parkInfo.introduction}</p>
        <ParkImage name={parkInfo.name} alt={`${parkInfo.name}`} />
      </div>
ha    </>
  );
};
