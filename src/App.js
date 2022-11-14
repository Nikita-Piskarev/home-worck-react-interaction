import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import UsersList from "./component/UsersList";

function App() {
  return (
    <ul>
      <UsersList />
    </ul>
  );
}

export default App;
