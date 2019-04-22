import React, { Component } from "react";

const Button = (props) => {
  const numer = parseInt(props.numer)
  return (<>
    <button onClick={() => props.click(props.typ, numer)}>{props.name}</button>
  </>);
}

export default Button;