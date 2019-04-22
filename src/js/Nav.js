import React from "react";
import { NavLink } from "react-router-dom";
const list = [
  { name: "XMLHttpRequest", path: "/", exact: true },
  { name: "Fetch", path: "/produkt" },
  { name: "zadania", path: "/kontakt" },
  { name: "pogoda", path: "/cztery" },
  { name: "pięć", path: "/piec" },
  { name: "sześć", path: "/szesc" },
  { name: "tabela", path: "/tabela" },
  { name: "osiem", path: "/osiem" }
];

const Nav = () => {
  return (
    <>
      {list.map(item => (
        <div key={item.name}>
          <NavLink to={item.path} exact={item.exact ? item.exact : false}>
            {item.name}
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default Nav;
