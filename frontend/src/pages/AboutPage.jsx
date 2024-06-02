import { DevCard } from "../components/DevCard";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
export const AboutPage = () => {
  return (
    <>
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
          The best place to relax your senses and enjoy the beautiful and
          pristine Finnish nature is the National Parks. There are 41 nature
          reserves in Finland - all of them are free to enter and open
          year-round with marked trails.
        </p>
        <p>
          A visit to any of the parks is sure to grow your love of the great
          outdoors even more. Learn more about National Parks in different
          regions below and search for the one nearest to your travel
          destination.
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
