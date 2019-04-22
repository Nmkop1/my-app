import React from "react";

const Zadanie = props => {
  const style = {
    color: "red"
  };
  const { text, date, id, active, important, finishDate } = props.task;
  if (active === true) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <strong>{date} </strong>
          <button onClick={() => props.status(id)}>Zrobione</button>
          <button onClick={() => props.delate(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date().toLocaleDateString();
    return (
      <div>
        <p>
          <strong>{text}</strong> <em>(zrobić do{date})</em> <strong> </strong>
          <br />
          wykonanao w dniu {finish}
          <button onClick={() => props.delate(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Zadanie;
