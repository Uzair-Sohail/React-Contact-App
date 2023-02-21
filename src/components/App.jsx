import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard({ name, imgURL, email, phone }) {
  return <Card name={name} img={imgURL} tel={phone} email={email} />;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
