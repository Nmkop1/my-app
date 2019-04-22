import React, { Component } from "react";
import Formularz from "../js/FormularzPogoda";
import Wynik from "../js/WynikPogoda";
class Cztery extends Component {
  state = {
    value: "",
    data: "",
    miasto: "",
    wschod: "",
    zachod: "",
    cisnienie: "",
    temperatura: "",
    wiatr: "",
    err: false
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  szukanieMiasta = e => {
    e.preventDefault();
    console.log("ddfdf");

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
      }&APPID=7bb3fa6eb271ecd95a92c35c830b4405&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          data: time,
          wschod: data.sys.sunrise,
          zachod: data.sys.sunset,
          cisnienie: data.main.pressure,
          temperatura: data.main.temp,
          wiatr: data.wind.speed,
          miasto: this.state.value
        });
      })
      .catch(err => {
        this.setState({
          err: true,
          city: this.state.value
        });
      });
  };
  render() {
    return (
      <div>
        <h1>Pogoda1</h1>
        <Formularz
          value={this.state.value}
          change={this.onChange}
          submit={this.szukanieMiasta}
        />
        <Wynik pogoda={this.state} />
      </div>
    );
  }
}

export default Cztery;
