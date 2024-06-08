import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoFullBlack } from "./iconFolder/LogoFullBlack";
import { LogoFullWhite } from "./iconFolder/LogoFullWhite";
import { SignupBtn } from "./buttons/SignupBtn";

export const NavBar = () => {
  const [hover, setHover] = useState(false);
  const links = [
    { to: "/", text: "Home" },
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];

  return (
    <div
      className="bg-navbar-default shadow-md hover:bg-navbar-hover w-full z-10 transition-colors duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          {hover ? <LogoFullWhite /> : <LogoFullBlack />}
          <nav className="hidden md:block ml-10">
            <ul className="flex space-x-4">
              {links.map(({ to, text }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      hover ? "text-white" : "text-fontColor"
                    }`}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SignupBtn />
          <Link
            to="/login"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              hover ? "text-white" : "text-fontColor"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
