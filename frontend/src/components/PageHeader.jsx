import React from "react";
import { NavBar } from "./NavBar";
import Pageheader from "./Pageheader.json";

export const PageHeader = ({ placeName }) => {
  const header = Pageheader.headers.find(
    (h) => h.placeName === placeName);
  const imageUrl = header ? header.imageUrl : "default-image.jpg";

  // Add debug logs
  console.log("placeName:", placeName);
  console.log("header:", header);
  console.log("imageUrl:", imageUrl);

  return (
    <>
      <NavBar />
      <div
        className={`bg-cover bg-center text-cardBg py-10 px-4 text-center min-h-screen flex items-center justify-center bg-opacity-50 sm:px-4`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-cardBg sm:text-h1sm md:text-h1md lg:text-h1lg font-avenir">
          Explore the wonder of parks in {placeName}
        </h1>
      </div>
    </>
  );
};
