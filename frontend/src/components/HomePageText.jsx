// import { VisitBtn } from "./buttons/VisitBtn";
// HomePageText.jsx
import { Link } from "react-router-dom";

export const HomePageText = ({ textTitle, text, textImg, textImgAlt, linkTo, btnName, titleStyle }) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start">
      <div className="md:w-1/2 p-4">
        <h4 className={titleStyle}>{textTitle}</h4>
        <p className="mb-4">{text}</p>
        <div>
          <Link to={linkTo}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {btnName}
            </button>
          </Link>
        </div>
      </div>
      {textImg && (
        <img src={textImg} alt={textImgAlt} className="md:w-1/2 h-auto" />
      )}
    </div>
  );
};

