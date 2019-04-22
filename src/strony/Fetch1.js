import React, { Component } from "react";
import Button from "../js/Button";
import Users from "../js/Users";

const API = "https://randomuser.me/api/?results=4";

class Fetch1 extends Component {
  state = {
    users: null
  };
  handle = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd");
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.results
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="fetch1 ">
        <Button click={this.handle} />
        {this.state.users ? (
          <Users users={this.state.users} />
        ) : (
          this.state.users
        )}
      </div>
    );
  }
}

export default Fetch1;
