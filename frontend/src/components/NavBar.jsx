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
      className={`transition-colors duration-300 ${
        hover ? "bg-white" : "bg-transparent"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          {hover ? <LogoFullBlack /> : <LogoFullWhite />}
          <nav className="hidden md:block ml-10 font-avenir">
            <ul className="flex space-x-4 ">
              {links.map(({ to, text }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`px-[30px] py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      hover ? "text-fontColor" : "text-cardBg"
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
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-avenir ${
              hover ? "text-fontColor" : "text-cardBg"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
