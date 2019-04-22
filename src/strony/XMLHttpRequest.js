import React, { Component } from "react";
import "../index.scss";
class jeden extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({ users });
      }
    };
    xhr.send();
  }
  render() {
    const users = this.state.users.map(user => (
      <div key={user.id} className="users">
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
    ));
    return <div className="jeden">{users}</div>;
  }
}

export default jeden;
