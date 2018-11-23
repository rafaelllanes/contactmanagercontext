import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control form-control-lg"
                placeholder="Enter Name.."
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Enter Email Address.."
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number.."
                value={phone}
                onChange={this.handleChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
