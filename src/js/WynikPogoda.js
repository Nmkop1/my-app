import React from "react";

const Wynik = props => {
  const {
    err,
    data,
    miasto,
    wschod,
    zachod,
    cisnienie,
    temperatura,
    wiatr
  } = props.pogoda;
  let caly = null;
  if (!err && miasto) {
    const wschodTime = new Date(wschod * 1000).toLocaleTimeString();
    const zachodTime = new Date(zachod * 1000).toLocaleTimeString();
    caly = (
      <>
        <h1>{miasto}</h1>
        <p>{`Data: ${data}`}</p>
        <p>{`Wschód: ${wschodTime}`}</p>
        <p>{`Zachód: ${zachodTime}`}</p>
        <p>{`Ciśnienie: ${cisnienie}`}</p>
        <p>{`Temperatura: ${temperatura}`}</p>
        <p>{`Wiatr: ${wiatr}`}</p>
      </>
    );
  }
  return <div>{err ? `Nie ma w bazie ${miasto}` : caly}</div>;
};

export default Wynik;
