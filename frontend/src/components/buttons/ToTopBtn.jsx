import { TopArrow } from "../iconFolder/TopArrow";
import ScrollTop from "react-scroll-to-top";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // const location = useLocation();

  // let textColor;
  // let iconColor;
  // if (location.pathname === "/sweden" || location.pathname === "/signup") {
  //   iconColor = "#FFFFFF";
  //   textColor = "text-cardBg";
  // } else if (
  //   location.pathname === "/finland" ||
  //   location.pathname === "/" ||
  //   location.pathname === "/about" ||
  //   location.pathname === "/login" ||
  //   location.pathname === "/logged" ||
  //   location.pathname === "*"
  // ) {
  //   iconColor = "#020209";
  //   textColor = "text-fontColor";
  // }

  return (
    <div>
      <ScrollTop
        smooth
        
        component={
          <div>
            {/* <TopArrow fill={`${iconColor}`} /> */}
            <p className={`text-xl text-center`}>Top</p>
          </div>
        }
      />
    </div>
  );
};