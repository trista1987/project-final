import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { HomePage } from "./pages/Home";
// import { ProtectedRoute } from "./pages/ProtectedRoute";
import { LoggedPage } from "./pages/Logged";
// import {ProtectedRoute} from "./pages/ProtectedRoute"
// import { LoggedPage } from "./pages/Logged";
const checkAuth = () => {
  return localStorage.getItem("Net-Token") != null;
};


export const App = () => {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Welcome to Final Project!</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
            path="/login"
            element={checkAuth() ? <Navigate to="/logged" /> : <Login />} />
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

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
