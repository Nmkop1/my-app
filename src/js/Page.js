import React from "react";
import { Route } from "react-router-dom";
import Jeden from "../strony/XMLHttpRequest";
import Dwa from "../strony/FetchWrap";
import Zadania from "../strony/Zadania";
import Cztery from "../strony/Cztery";
import Piec from "../strony/Piec";
import Szesc from "../strony/Szesc";
import Tabela from "../tabela/Tabela";
import Osiem from "../strony/Osiem";
const Page = () => {
  return (
    <>
      <Route path="/" exact component={Jeden} />

      <Route path="/produkt" component={Dwa} />
      <Route path="/kontakt" component={Zadania} />
      <Route path="/cztery" component={Cztery} />
      <Route path="/piec" component={Piec} />
      <Route path="/szesc" component={Szesc} />
      <Route path="/tabela" component={Tabela} />
      <Route path="/osiem" component={Osiem} />
    </>
  );
};

export default Page;
