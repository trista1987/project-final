import { DevCard } from "../components/DevCard";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Link } from "react-router-dom";
import { NavBarNoHover } from "../components/NavBarNoHover"

export const AboutPage = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];

  return (
    <>
      <NavBarNoHover />
      <div>
        <h2>
          Hello👋
          <br />
          It's Trista and Yia
        </h2>
        <p>
          We are two web developers graduated from Technigo Bootcamp. This is
          our final project where we put everything we have learned into
          reality.
        </p>
      </div>
      <div>
        <h3>About us</h3>
        <p>
          We both have studied and worked in Sweden and Finland for almost five
          years. Coming from similar cultural background, we found many
          similarities in our Nordic journey. But one thing we both agree is the
          beauty of Nordic nature.
        </p>
        <p>
          The website is inspired by 
          <a href="https://www.visitfinland.com/en/"> Visit Finland</a> and all photos are from real images from the parks.
          We keep all the photo credits here. Thank you all for visiting and we hope you find your next destination here.
        </p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <DevCard
          devImage={""}
          devName={"Yia"}
          developerName={"Yia Tsai"}
          devIntro={"introduction"}
          gitLink={""}
          linkedinLink={""}
          portfolioLink={""}
        />
      </div>
      <div>
        <DevCard
          devImage={""}
          devName={"Trista"}
          developerName={"Trista Shan"}
          devIntro={"introduction"}
          gitLink={""}
          linkedinLink={""}
          portfolioLink={""}
        />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};
