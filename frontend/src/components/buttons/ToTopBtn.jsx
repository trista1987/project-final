//each page down side scroll to top
import { TopArrow } from "../iconFolder/TopArrow";
import {useState, useEffect} from "react"

export const ToTopBtn = () => {
  const [isVisibile, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return() => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div>
      {isVisibile && (
        <button onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 bg-transparent text-fontColor text-lg flex items-center space-x-2" >
          <span>Back to top</span>
          <TopArrow />
        </button>
      )}
    </div>
  )
}
// import ScrollTop from "react-scroll-to-top";

// export const ScrollToTop = () => {
//   return (
//     <div>
//       <ScrollTop
//         smooth
//         component={
//           <div className="content-center">
//          <TopArrow/>
//          </div>
//         } 
//       />
//     </div>
//   );
// };
