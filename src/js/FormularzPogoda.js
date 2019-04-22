import React from "react";
const Formularz = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="wpisz"
      />
      <button>Wyszukaj</button>
    </form>
  );
};

export default Formularz;
