import { useParkStore } from "../store/useParkStore";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Map } from "../components/Map";
import { ParkImage } from "../components/parkComponents/ParkImage";
import { BackBtn } from "../components/buttons/BackBtn";
import {Line} from "../components/iconFolder/Line"
import {TextRating} from "../components/parkComponents/ParkRate"


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
      

      <div key={parkInfo._id} className="sm:grid sm:grid-rows-6 sm:grid-cols-2 ">
        <div>
        <Line />
        <h2 className="sm:text-h2sm md:text-h2lg lg:text-h2lg">{parkInfo.name}</h2>
        <div >
          <p>{parkInfo.rating}</p><TextRating labels={parkInfo.rating} value={parkInfo.rating}/>
        </div>
        
      </div>
        
       
        <div>
          <p className="sm:text-textsm md:text-textmd lg:text-textlg">Opening hours: {parkInfo.opening_hours}</p>
        <p className="sm:text-textsm md:text-textmd lg:text-textlg">{parkInfo.address}</p>
        <p className="sm:text-textsm md:text-textmd lg:text-textlg">{parkInfo.parking_info}</p>
        </div>
        
        <Map position={[parkInfo.location.latitude, parkInfo.location.longitude]} parkName={parkInfo.name} className={"sm:w-[324px] sm:h-[224px] md:w-[534px] md:h-[324px] lg:w-[423px] l:h-[278px]"}/>
        <p className="sm:text-textsm me:text-textmd lg:text-textlg">{parkInfo.introduction}</p>
        <ParkImage name={parkInfo.name} alt={`${parkInfo.name}`} className={"sm:w-[390px] sm:h-[400px] sm:col-start-1 sm:col-span-2 sm:row-start-1 sm:row-span-1 md:w-[600px] md:h-[400px] lg:w-[690px] l:h-[460px]"}/>
      </div>
    </>
  );
};
