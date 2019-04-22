import React, { Component } from "react";
import Button from "../js/Button";
import Users from "../js/Users";

const API = "https://randomuser.me/api/?results=1";

class Fetch2 extends Component {
  state = {
    users: []
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
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="fetch2 ">
        <Button click={this.handle} />
        {this.state.users.length > 0 ? (
          <Users users={this.state.users} />
        ) : (
          this.state.users
        )}
      </div>
    );
  }
}

export default Fetch2;
