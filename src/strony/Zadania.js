import React, { Component } from "react";
import DodanieZadania from "../js/DodanieZadania";
import ZadaniaCz2 from "../js/ZadaniaCz2";
import axios from "../axios-orders"
class Zadania extends Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        text: "coś tam",
        date: "2019-08-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "coś tam1",
        date: "2019-07-15",
        important: true,
        active: false,
        finishDate: null
      },
      {
        id: 2,
        text: "coś tam2",
        date: "2019-06-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "coś tam3",
        date: "2019-03-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "coś tam4",
        date: "2019-77-15",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };
  delate = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });

  };
  status = id => {
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getDate();
      }
    });
    this.setState({
      tasks
    });
  };
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };

    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],

    }));
    const order = {
      tasks: this.state.tasks,
      name: "Jacek"
    }
    axios.post("/orders.json ", order)
      .then(response => console.log(response))
      .catch(error => console.log(error))
    return true;
  };

  render() {
    return (
      <div className="zadania">
        <div>
          <h1>ZADANIA</h1>
        </div>
        <DodanieZadania addTask={this.addTask} />
        <ZadaniaCz2
          tasks={this.state.tasks}
          delate={this.delate}
          status={this.status}
        />
      </div>
    );
  }
}

export default Zadania;
