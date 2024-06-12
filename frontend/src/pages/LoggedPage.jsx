import { Footer } from "../components/Footer";
import { Line } from "../components/iconFolder/Line";
import { NavBarLogedIn } from "../components/NavBarLogedIn";

export const LoggedPage = () => {
  const emptyState = "./backgroundImages/hiking.jpg";

  return (
    <>
      <section>
        <NavBarLogedIn />
        <div className="flex flex-col sm:py-[50px] sm:px-[80px] justify-center items-center">
          <h1 className="sm:text-h2sm md:text-h2lg lg:text-h2lg font-avenir text-center ">
            Save your next destination here
          </h1>
          <div className="flex flex-row sm:gap-x-[30px] sm:p-[30px]">
            <button className="text-fontColor sm:text-textsm md:textmd lg:text-textmd">
              All
            </button>
            <button className="text-fontColor sm:text-textsm md:textmd lg:text-textmd">
              Finland
            </button>
            <button className="text-fontColor sm:text-textsm md:textmd lg:text-textmd">
              Sweden
            </button>
          </div>
          <Line className="text-center" />
        </div>
        <div className="flex justify-center items-center sm:py-[112px] sm:px-[100px]">
          <img
            src={emptyState}
            alt="hiking"
            className="sm:w-[265px] sm:h-[245px] w-[512px] h-[512px]"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};