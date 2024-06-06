//each page down side scroll to top
import { TopArrow } from "../iconFolder/TopArrow";
import ScrollTop from "react-scroll-to-top";

export const ScrollToTop = () => {
  return (
    <div>
      <ScrollTop
        smooth
        component={
          <p>
            Back to top
            <TopArrow />
          </p>
        } 
      />
    </div>
  );
};
