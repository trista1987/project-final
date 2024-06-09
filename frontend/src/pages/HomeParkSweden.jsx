import { Link } from "react-router-dom";

export const HomePageSweden = () => {
  const textTitle = "A Dazzling Display of Nature | Explore Sweden";
  const text =
    "Hike beneath the midnight sun in summer, trek through vibrant fall foliage, or chase the Northern Lights in winter. Every season unveils a new adventure in Sweden's breathtaking nature.";
  const textImg = "/backgroundImages/mainpage-sweden.jpg";
  const textImgAlt = "Sweden Landscape";
  const linkTo = "/sweden";
  const btnName = "Visit Sweden";

  return (
    <div
      className="relative w-full md:w-2/3 flex flex-col md:flex-row md:pt-[60px]">
      <div className="flex-1 h-[600px]">
        <img
          src={textImg}
          alt={textImgAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4 md:p-12 md:absolute md:top-1/2 md:right-[-30%] md:w-[50%] md:transform md:-translate-y-1/2 md:-translate-x-3/3">
        <div className="bg-bg2 md:rounded-lg flex flex-col justify-center p-4 md:p-12">
          <h2
            className="text-cardBg lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir my-4"
            style={{ margin: "16px", paddingTop: "8px" }}
          >
            {textTitle}
          </h2>
          <p
            className="text-cardBg lg:text-textlg md:text-textmd sm:text-textsm font-avenir my-4"
            style={{
              margin: "16px",
              paddingBottom: "8px",
              paddingRight: "8px",
            }}
          >
            {text}
          </p>

          <Link to={linkTo}>
            <div style={{ margin: "16px", marginBottom: "50px" }}>
              <button className="bg-bg1 text-bg2 font-avenir font-bold rounded-lg md:text-lg py-2 px-2">
                {btnName}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
