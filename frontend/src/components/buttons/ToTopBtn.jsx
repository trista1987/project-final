import ScrollTop from "react-scroll-to-top";

export const ScrollToTop = () => {
  return (
    <div>
      <ScrollTop
        smooth
        component={
          <div>
            <p className={`text-xl text-center`}>Top</p>
          </div>
        }
      />
    </div>
  );
};
