import React, { Component } from "react";

class DodanieZadania extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10)
  };

  hendleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  hendleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleCheced = e => {
    this.setState({
      checked: e.target.checked
    });
  };
  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const addTask = this.props.addTask(text, date, checked);
      if (addTask) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().slice(0, 10)
        });
      }
    } else {
      alert("Podaj");
    }
  };

  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="dodajZadanie">
        <input
          type="text"
          placeholder="dodaj"
          value={this.state.text}
          onChange={this.hendleText}
        />
        <input
          type="text"
          placeholder="dodaj"
          value={this.state.text}
          onChange={this.hendleText}
        />
        <label htmlFor="date">Do kiedy</label>
        <input
          onChange={this.hendleDate}
          type="date"
          value={this.state.date}
          min={minDate}
          max={maxDate}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheced}
          id="important"
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default DodanieZadania;
