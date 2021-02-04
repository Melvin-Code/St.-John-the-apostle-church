import React, { Component } from "react";
import Guide from "./partials/Guide";

import SacrRender from "./partials/SacrRender";

export default class Sacraments extends Component {
  render() {
    return (
      <div className="sacraments">
        <Guide />
        <SacrRender />
      </div>
    );
  }
}
