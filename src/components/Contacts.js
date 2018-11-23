import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "karen@gmail.com",
        phone: "555-555-4444"
      },
      {
        id: 3,
        name: "Shana Carpenter",
        email: "shana@gmail.com",
        phone: "555-555-4353"
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
