import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
export default class Guide extends Component {
    render() {
        return (
            <section className="guide-container">
            <ul className="guide-table">
              <div className="label-drop">Sacraments</div>
              <div className="content-container">
                <div id="Baptism" className="content">
                  <Link to='/sacraments/baptisim'>Baptism</Link>
                </div>
                <div id="Confession/Reconsilation" className="content">
                  <Link to='#'>Confession/Reconsilation</Link>
                </div>
                <div id="Confirmation" className="content">
                  <Link to='#'>Confirmation</Link>
                </div>
                <div id="First Holy Comunnion" className="content">
                  <Link to='#'>First Holy Comunnion</Link>
                </div>
                <div id="Holy Orders" className="content">
                  <Link to='#'>Holy Orders</Link>
                </div>
                <div id="Marriage" className="content">
                  <Link to='#'>Marriage</Link>
                </div>
                <div id="Anointing of the Sick" className="content">
                  <Link to='#'>Anointing of the Sick</Link>
                </div>
              </div>
            </ul>
          </section>
        )
    }
}
