// // import { VisitBtn } from "./buttons/VisitBtn";
// // HomePageText.jsx
// import { Link } from "react-router-dom";

// export const HomePageText = ({
//   textTitle,
//   text,
//   textImg,
//   textImgAlt,
//   linkTo,
//   btnName,
//   textBg,
//   btnBg,
//   btnText,
//   h2,
//   body,
//   imageFirst,
//   textPosition,
// }) => {
//   // To check if all dynamic values are correctly passed
//   console.log("textBg:", textBg);
//   console.log("btnBg:", btnBg);
//   console.log("btnText:", btnText);


//   return (
//     <div
//       className={`relative flex flex-col ${
//         imageFirst ? "md:flex-row" : "md:flex-row-reverse"
//       } items-center text-center bg-cover bg-center `}
//     >
//       <img
//         src={textImg}
//         alt={textImgAlt}
//         className="w-full md:w-2/3 h-auto object-cover"
//       />
//       <div
//         className={`lg:relative md: p-6 mx-auto ${textBg} rounded-lg w-full lg:w-[535px] h-auto lg:h-[477px]`}
 
//       >
//         <h2
//           className={`lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir mb-1.8rem text-left ${h2}`}
//         >
//           {textTitle}
//         </h2>
//         <p
//           className={`text-left lg:text-textlg md:text-textmd sm:text-textsm font-avenir ${body}`}
//         >
//           {text}
//         </p>
//         <Link to={linkTo}>
//           <div className="inline-block">
//             <button className={`py-2 px-4 rounded ${btnBg} ${btnText}`}>
//               {btnName}
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

import React from "react";
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
      } items-center text-center bg-cover bg-center my-10 mb-10`}
    >
      <div className="relative w-full md:w-2/3">
        <img
          src={textImg}
          alt={textImgAlt}
          className="w-full h-auto object-cover"
        />
        <div
          className={`absolute p-6 ${textBg} rounded-lg w-full lg:w-[535px] h-auto lg:h-[477px] z-10 ${
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
            <div className="inline-block">
              <button className={`py-2 px-4 rounded ${btnBg} ${btnText}`}>
                {btnName}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

