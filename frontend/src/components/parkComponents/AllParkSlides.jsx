import { useParkStore } from "../../store/useParkStore";
import { useEffect } from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { ParkImage } from "./ParkImage";

export const AllParkSlides = () => {
  const { fetchParkData, parkData, loading, error } = useParkStore();

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

  return (
    <div>
      <Carousel>
        <ul>
          {parkData.map((park) => (
            <li key={park._id}>
              <Link
                to={`/${park.nation}/${park.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <ParkImage name={park.name} alt={`${park.name}`} />
              </Link>
              <Link
                to={`/${park.nation}/${park.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                {park.name}
              </Link>
              <p>{park.introduction.slice(0, 100)}</p>
            </li>
          ))}
        </ul>
      </Carousel>
    </div>
  );
};
