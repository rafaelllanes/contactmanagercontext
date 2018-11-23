import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data => {
        console.log(data.name);
        this.setState({
          name: data.name,
          email: data.email
        });
      });
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Test;
