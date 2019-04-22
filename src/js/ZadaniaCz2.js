import React from "react";
import Zadanie from "./Zadanie";

const ZadaniaCz2 = props => {
  const active = props.tasks.filter(task => task.active === true);
  const done = props.tasks.filter(task => !task.active);

  if (done.length > 2) {
    done.sort((a, b) => a.finishDate - b.finishDate);
  }

  const activeTasks = active.map(task => (
    <Zadanie
      key={task.id}
      task={task}
      delate={props.delate}
      status={props.status}
    />
  ));
  const doneTasks = done.map(task => (
    <Zadanie
      key={task.id}
      task={task}
      delate={props.delate}
      status={props.status}
    />
  ));
  return (
    <div>
      <div>
        <h2>Lista zadań</h2>
        {activeTasks.length > 0 ? activeTasks : <p>KONIEC</p>}
      </div>
      <hr />
      <div>
        <h2>
          Zadania zrobione <em>{done.length}</em>
        </h2>
        {done.length > 2 && <p>Wyświetlone tylko 2 osttnie</p>}
        {doneTasks.slice(0, 2)}
      </div>
    </div>
  );
};

export default ZadaniaCz2;
