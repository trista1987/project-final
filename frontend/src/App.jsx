import { BrowserRouter, Routes} from "react-router-dom";
import { routes } from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
          <Routes>{routes}</Routes> 
      </BrowserRouter>
    </AuthProvider>
      
    </>
  );
};
