import { Link } from "react-router-dom";
import { WebName } from "./WebName";

export const Footer = () => {
  const links = [
    { to: "/finland", text: "Finland" },
    { to: "/sweden", text: "Sweden" },
    { to: "/about", text: "About us" },
  ];
  return (
    <>
    <div>
      <div>
        <WebName />
        <ul className="navbar">
          {links.map(({ to, text }) => (
            <li key={to} className="nav-li">
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>Created by Trista Shan & Yia Tsai</p>
      </footer>
    </div>
    </>
  );
};
