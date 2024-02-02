import { useState, useEffect } from "react";
import ContactList from "./ContactList";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {

const [contact, setContact] = useState(null);
console.log(contact)
useEffect(() => {
  async function selected() {
    try {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const contact = await response.json();
      setContact(contact);
    } catch (error) {
      console.error(error);
    }
  }
  selected();
}, []);
return (
    <div>
        <h2>Selected Contact</h2>
        {contact && <p>{contact.name}</p>}
        <button>Home</button>
    </div>
)
}