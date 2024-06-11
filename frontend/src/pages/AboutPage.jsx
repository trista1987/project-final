import { DevCard } from "../components/DevCard";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Link } from "react-router-dom";
import { NavBarNoHover } from "../components/NavBarNoHover";
import { Line } from "../components/iconFolder/Line";

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
      <div className="relative">
        <img
          src="/backgroundImages/hero-aboutus.jpg"
          alt="hero-about-us"
          className="md:h-[580px] w-[100%]"
        />
        <div className="absolute top-1/4 md:ml-[50px] sm:ml-[10px]">
          <h2 className="lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir text-cardBg font-semibold">
            Hello👋
            <br />
            It's Trista and Yia
          </h2>
          <p className="mt-[20px] sm:mt-[10px] font-avenir font-semibold text-cardBg lg:text-textlg md:text-textmd sm:text-textsm">
            We are two web developers graduated from Technigo Bootcamp. <br />
            This is our final project where we put everything we have learned
            into reality.
          </p>
        </div>
      </div>
      <div className="mt-[90px] md:ml-[70px] md:mb-[50px] sm:w-[390px] sm:ml-[20px]">
        <Line />
        <h2 className="lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir">
          About us
        </h2>
        <p className="font-avenir lg:text-textlg md:text-textmd sm:text-textsm md:w-[700px] items-end sm:w-[300px]">
          We both have studied and worked in Sweden and Finland for almost five
          years. Coming from similar cultural background, we found many
          similarities in our Nordic journey. But one thing we both agree is the
          beauty of Nordic nature.
          <br />
          The website is inspired by
          <a href="https://www.visitfinland.com/en/"> Visit Finland</a> and all
          photos are from real images from the parks. We keep all the photo
          credits here. Thank you all for visiting and we hope you find your
          next destination here.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/backgroundImages/default-image.jpg"
          alt="default-image"
          className="md:w-[640px] h-auto object-cover sm:w-[300px]"
        />
      </div>
      <div className="w-full justify-center py-[20px]">
        <DevCard
          devImage={"/developerImages/yia.png"}
          devName={"Yia"}
          developerName={"Yia Tsai"}
          devIntro={"Frontend Developer based in Malmö, Sweden"}
          gitLink={"https://github.com/Citronskal"}
          linkedinLink={"https://www.linkedin.com/in/yiatsai33/"}
          portfolioLink={"https://yia-porfolio.netlify.app/"}
        />
      </div>
      <div className="w-full justify-center py-[20px]">
        <DevCard
          devImage={"/developerImages/trista.jpeg"}
          devName={"Trista"}
          developerName={"Trista Shan"}
          devIntro={"Web Developer based in Helsinki, Finland"}
          gitLink={"https://github.com/tristashan"}
          linkedinLink={"https://www.linkedin.com/in/trista-shan-62074471/"}
          portfolioLink={"https://trista-portfolio.netlify.app/"}
        />
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};
