import { Route,Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/LoginPage";
import { Signup } from "../pages/SignupPage";
import { LoggedPage } from "../pages/LoggedPage";
import {FinlandPage} from "../pages/FinlandPage"
import {SwedenPage} from "../pages/SwedenPage"
import {AboutPage} from "../pages/AboutPage"
import { ParkDetails } from "../components/ParkComp.jsx/ParkDetails";


// import { ProtectedRoute } from "./pages/ProtectedRoute";

const checkAuth = () => {
    return localStorage.getItem("Net-Token") != null;
  };

  export const routes = (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/finland" element={<FinlandPage />} />
      <Route path="/sweden" element={<SwedenPage />} />
      <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/login"
              element={checkAuth() ? <Navigate to="/logged" /> : <Login />}
            />
            <Route
              path="/signup"
              element={checkAuth() ? <Navigate to="/login" /> : <Signup />}
            />
            <Route path="/logged" element={<LoggedPage />} />

            {/* <Route path="/logged" element={
              <ProtectedRoute>
                <LoggedPage />
              </ProtectedRoute>
            }/> */}
      <Route path="/parks/:park_id" element={<ParkDetails />} />
    </>
  )

  //signup then link to login?