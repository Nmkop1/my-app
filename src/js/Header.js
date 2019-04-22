import React from "react";
import { Route } from "react-router-dom";
import img1 from "../foto/slider1_1.jpg";
import img2 from "../foto/slider1_2.jpg";
import img3 from "../foto/slider1_3.jpg";
const Header = () => {
  return (
    <div>
      <Route path="/" exact render={() => <img src={img1} alt="sd" />} />
      <Route path="/produkt" render={() => <img src={img2} alt="sd" />} />
      <Route path="/kontakt" render={() => <img src={img3} alt="sd" />} />
      <Route path="/admin" render={() => <img src={img1} alt="sd" />} />
    </div>
  );
};

export default Header;
