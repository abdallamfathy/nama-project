import React from 'react'


import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()

const [showModal, setShowModal] = React.useState(true);
return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );


export default Context