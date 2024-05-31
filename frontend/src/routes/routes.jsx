import { Route,Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Login } from "../pages/LoginPage";
import { Signup } from "../pages/SignupPage";
import { LoggedPage } from "../pages/LoggedPage";

// import { ProtectedRoute } from "./pages/ProtectedRoute";

const checkAuth = () => {
    return localStorage.getItem("Net-Token") != null;
  };

  export const routes = (
    <>
      <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/login"
              element={checkAuth() ? <Navigate to="/logged" /> : <Login />}
            />
            <Route
              path="/signup"
              element={checkAuth() ? <Navigate to="/logged" /> : <Signup />}
            />
            <Route path="/logged" element={<LoggedPage />} />
            {/* <Route path="/logged" element={
              <ProtectedRoute>
                <LoggedPage />
              </ProtectedRoute>
            }/> */}
    </>
  )