import { useParkStore } from "../store/useParkStore";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Map } from "../components/Map";
import { ParkImage } from "../components/parkComponents/ParkImage";
import { BackBtn } from "../components/buttons/BackBtn";
import {Line} from "../components/iconFolder/Line"

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
      <div>
        <BackBtn />
      </div>
      <div>
        <Line />
      </div>

      <div key={parkInfo._id}>
        <h2 className="sm:text-h2sm md:text-h2lg lg:text-h2lg">{parkInfo.name}</h2>
        <p>{parkInfo.rate}</p>
        <p className="sm:text-textsm md:text-textmd lg:text-textlg">Opening hours: {parkInfo.opening_hours}</p>
        <p className="sm:text-textsm md:text-textmd lg:text-textlg">{parkInfo.address}</p>
        <p className="sm:text-textsm md:text-textmd lg:text-textlg">{parkInfo.parking_info}</p>
        <Map position={[parkInfo.location.latitude, parkInfo.location.longitude]} parkName={parkInfo.name} className={"sm:w-[324px] sm:h-[224px] md:w-[534px] md:h-[324px] lg:w-[423px] l:h-[278px]"}/>
        <p className="sm:text-textsm me:text-textmd lg:text-textlg">{parkInfo.introduction}</p>
        <ParkImage name={parkInfo.name} alt={`${parkInfo.name}`} className={"sm:w-[390px] sm:h-[400px] md:w-[600px] md:h-[400px] lg:w-[690px] l:h-[460px]"}/>
      </div>
    </>
  );
};
