import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import Nav from "./js/Nav";
import Page from "./js/Page";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="wraper">
          <div className="navi">
            <nav>{<Nav />}</nav>
          </div>
          <section className="">{<Page />}</section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

