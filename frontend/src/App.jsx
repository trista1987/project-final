import { BrowserRouter, Routes} from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
          <h1>Welcome to Final Project!</h1>
          <Routes>{routes}</Routes> 
      </BrowserRouter>
    </>
  );
};
