import { Link } from "react-router-dom";

export const HomePageSe = () => {
  const textTitle = "A Dazzling Display of Nature | Explore Sweden";
  const text =
    "Hike beneath the midnight sun in summer, trek through vibrant fall foliage, or chase the Northern Lights in winter. Every season unveils a new adventure in Sweden's breathtaking nature.";
  const textImg = "/backgroundImages/mainpage-sweden.jpg";
  const textImgAlt = "Sweden Landscape";
  const linkTo = "/sweden";
  const btnName = "Visit Sweden";

  return (
    <div className="relative w-full md:w-2/3 h-auto flex flex-col md:flex-row sm:flex-wrap">
      <div className={`flex-1 ${true ? "order-1" : "order-2"}`}>
        <img
          src={textImg}
          alt={textImgAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`flex-1 ${true ? "order-2" : "order-1"} p-4`}>
        <div className="relative bg-green-500 rounded-lg flex flex-col justify-center p-4 md:p-12">
          <h2 className="text-white text-lg md:text-2xl font-avenir my-4">
            {textTitle}
          </h2>
          <p className="text-black text-base md:text-lg font-avenir my-4">
            {text}
          </p>

          <Link to={linkTo}>
            <div className="my-4">
              <button className="bg-blue-100 text-white font-avenir font-bold rounded-lg text-base md:text-lg py-2 px-4">
                {btnName}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
