import { BrowserRouter, Routes} from "react-router-dom";
import { routes } from "./routes/routes";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
          <Routes>{routes}</Routes> 
      </BrowserRouter>
    </>
  );
};
