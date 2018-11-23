import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: ""
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({
        errors: { name: "Name is Required" }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is Required" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Phone is Required" }
      });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({
      type: "ADD_CONTACT",
      payload: newContact
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name.."
                    type="text"
                    handleChange={this.handleChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter Email.."
                    type="email"
                    handleChange={this.handleChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone.."
                    type="text"
                    handleChange={this.handleChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
