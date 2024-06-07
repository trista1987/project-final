/* eslint-disable no-console */
import { useParkStore } from "../store/useParkStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Carousel } from "antd";

export const ParkSlides = ({ nation }) => {
  const { fetchParkData, parkData, loading, error } = useParkStore();

  useEffect(() => {
    fetchParkData(`https://parkhive.onrender.com/parks?nation=${nation}`);
    console.log(parkData);
  }, [fetchParkData, nation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Carousel>
      <ul>
        {parkData.map((park) => (
          <li key={park._id}>
            <Link
              to={`/${nation}/${park.name.toLowerCase().replace(/ /g, "-")}`}
            >
              {park.name}
            </Link>
            <p>{park.introduction.slice(0, 100)}</p>
          </li>
        ))}
      </ul>
    </Carousel>
  );
};