import React, { Component } from "react";
import Guide from "./partials/Guide";
import NavbarSpacer from "./partials/NavbarSpacer";

export default class Sacraments extends Component {
  render() {
    return (
      <div>
        <NavbarSpacer />
        <Guide />
        <section></section>
      </div>
    );
  }
}
