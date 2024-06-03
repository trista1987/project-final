import { useParkStore } from "../store/useParkStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    return <div>Park not found</div>;
  }

  return (
    <>
      <div key={parkInfo._id}>
        <h4>{parkInfo.name}</h4>
        <p>{parkInfo.rate}</p>
        <p>{parkInfo.opening_hours}</p>
        <p>{parkInfo.address}</p>
        <p>{parkInfo.parking_info}</p>
        <p>{parkInfo.introduction}</p>
      </div>
    </>
  );
};
