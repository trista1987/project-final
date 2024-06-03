// import { VisitBtn } from "./buttons/VisitBtn";
import {Link} from "react-router-dom"
export const HomePageText = ({ textTitle, text, textImg, textImgAlt, linkTo, btnName}) => {
  return (
    <>
      <div>
        <h4>{textTitle}</h4>
        <p>{text}</p>
        <div>
            <Link to={linkTo}>
                <button>{btnName}</button>
            </Link>
        </div>
      </div>
      <img src={textImg} alt={textImgAlt} />
    </>
  );
};
