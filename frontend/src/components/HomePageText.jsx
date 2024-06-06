// import { VisitBtn } from "./buttons/VisitBtn";
// HomePageText.jsx
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
  // Debug logs to check if values are correctly passed
  console.log("textBg:", textBg);
  
  return (
    <div
      className={`relative flex flex-col ${
        imageFirst ? "md:flex-row" : "md:flex-row-reverse"
      } items-center text-center bg-cover bg-center `}
    >
      <img
        src={textImg}
        alt={textImgAlt}
        className="w-full md:w-2/3 h-auto md:h-screen object-cover"
      />
      <div
        className={`relative z-10 p-6 max-w-2xl mx-auto ${textBg} rounded-lg`}
      >
        <h2
          className={`lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir mb-1.8rem text-left ${h2}`}
        >
          {textTitle}
        </h2>
        <p
          className={`text-left lg:text-textlg md:text-textmd sm:text-textsm font-avenir ${body}`}
        >
          {text}
        </p>
        <Link to={linkTo}>
          <div className="inline-block">
            <button className={`py-2 px-4 rounded ${btnBg} ${btnText}`}>
              {btnName}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
