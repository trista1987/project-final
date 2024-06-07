import { Link } from "react-router-dom";

export const HomePageText = ({
  textTitle,
  text,
  textImg,
  textImgAlt,
  linkTo,
  btnName,
  textBg,
  btnBg,
  btnText,
  h2,
  body,
  imageFirst,
}) => {
  // Debugging to check passed values
  console.log("textBg:", textBg);
  console.log("btnBg:", btnBg);
  console.log("btnText:", btnText);


  return (
    <div
      className={`relative flex flex-col ${
        imageFirst ? "md:flex-row" : "md:flex-row-reverse"
      } items-center text-center bg-cover bg-center my-10`}
    >
      <div className="relative w-full md:w-2/3">
        <img
          src={textImg}
          alt={textImgAlt}
          className="lg:w-full h-[700px] object-cover"
        />
        <div
          className={`absolute p-6 ${textBg} rounded-lg w-full lg:w-[535px] h-[400px] z-10 ${
            imageFirst
              ? "bottom-10 lg:bottom-auto lg:left-[670px] lg:top-1/4"
              : "bottom-10 lg:bottom-auto lg:right-[670px] lg:top-1/4"
          }`}
        >
          <h2
            className={`lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir mb-6 text-left ${h2}`}
          >
            {textTitle}
          </h2>
          <p
            className={`text-left lg:text-textlg md:text-textmd sm:text-textsm font-avenir ${body}`}
          >
            {text}
          </p>
          <Link to={linkTo}>
            <div className={`inline-block ${btnBg}`}>
              <button className={`py-2 px-4 rounded  ${btnText}`}>
                {btnName}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

