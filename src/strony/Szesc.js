import React, { Component } from "react";

class Szesc extends Component {
  state = {
    user: "",
    email: "",
    password: "",
    zgoda: false,

    errors: {
      user: false,
      email: false,
      password: false,
      zgoda: false
    }
  };
  warunki = {
    user_: "Nazwa musi mieć 10",
    email_: "Brak @",
    password_: "Hasło 8 znaków",
    zgoda_: "Niepotwierdzono"
  };
  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      this.setState({
        [name]: e.target.value
      });
    } else if (type === "checkbox") {
      this.setState({
        [name]: e.target.checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="imie">
            Imię:
            <input
              type="text"
              id="imie"
              name="user"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Hasło:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="zgoda">
            <input
              type="checkbox"
              id="zgoda"
              name="zgoda"
              checked={this.state.zgoda}
              onChange={this.handleChange}
            />
            Zgoda
          </label>
          <br />
          <button>ZAPISZ</button>
        </form>
      </>
    );
  }
}

export default Szesc;
