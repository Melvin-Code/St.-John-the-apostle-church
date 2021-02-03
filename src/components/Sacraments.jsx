import React, { Component } from "react";
import Guide from "./partials/Guide";
import NavbarSpacer from "./partials/NavbarSpacer";
import SacrRender from "./partials/SacrRender";

export default class Sacraments extends Component {
  render() {
    return (
      <div>
        <NavbarSpacer />
        <Guide />
        <section>
        <SacrRender/>
        </section>
      </div>
    );
  }
}
