import React from "react";
import Header from "../components/Header";
import "bulma/css/bulma.css";

export default class Layout extends React.Component {
  render() {
    return (
      <nav className="level">
        <Header />
      </nav>
    );
  }
}
