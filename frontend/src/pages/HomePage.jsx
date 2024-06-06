import { HomePageText } from "../components/HomePageText";
import { PageHeader } from "../components/PageHeader";
import { ScrollToTop } from "../components/buttons/ToTopBtn";
import { Footer } from "../components/Footer";
import Homepagetext from "../components/Homepagetext.json";

export const HomePage = () => {
  return (
    <>
      <PageHeader placeName={"Scandinavia"} />
      {/* <HomePageText textTitle={"Find your inner Finn in Nature | Explore Finland"} text={"The Helsinki Happiness hacks are your gateway to mastering your happiness and taking a step closer to find your inner Finn"} textImg={""} textImgAlt={""} linkTo={"/finland"} btnName={"Visit Finland"} titleStyle={""}/>
      <HomePageText textTitle={"Experience the season | Explore Sweden"} text={"See the magnificant season change through the eyes of reindeer"} textImg={""} textImgAlt={""} linkTo={"/sweden"} btnName={"Visit Sweden"}/> */}
      <main className="mt-10">
        {Homepagetext.homepagetext.map((section, index) => (
          <section key={index}>
            <HomePageText
              textTitle={section.textTitle}
              text={section.text}
              textImg={section.textImg}
              textImgAlt={section.textImgAlt}
              linkTo={section.linkTo}
              btnName={section.btnName}
              textBg={section.textBg}
              btnBg={section.btnBg}
              btnText={section.btnText}
              h2={section.h2}
              body={section.body}
              imageFirst={section.imageFirst}
            />
          </section>
        ))}
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};
