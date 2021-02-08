import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Guide extends Component {
  render() {
    return (
      <section className="guide-container">
        <ul className="guide-table">
          <div className="label-drop">Sacraments</div>
          <div className="content-container">
            <Link to="/sacraments/baptisim">
              <div id="Baptism" className="content">
                Baptism
              </div>
            </Link>
            <Link to="/sacraments/ConfessionReconsilation">
              <div id="Confession/Reconsilation" className="content">
                Confession/Reconsilation
              </div>
            </Link>
            <Link to="/sacraments/Confirmation">
              <div id="Confirmation" className="content">
                Confirmation
              </div>
            </Link>
            <Link to="/sacraments/FirstHolyComunnion">
              <div id="First Holy Comunnion" className="content">
                First Holy Comunnion
              </div>
            </Link>
            <Link to="/sacraments/HolyOrders">
              <div id="Holy Orders" className="content">
                Holy Orders
              </div>
            </Link>
            <Link to="/sacraments/Marriage">
              <div id="Marriage" className="content">
                Marriage
              </div>
            </Link>
            <Link to="/sacraments/AnointingoftheSick">
              <div id="Anointing of the Sick" className="content">
                Anointing of the Sick
              </div>
            </Link>
          </div>
        </ul>
      </section>
    );
  }
}
