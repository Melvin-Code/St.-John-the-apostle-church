import React, { Component } from 'react'

export default class Guide extends Component {
    render() {
        return (
            <section className="guide-container">
            <ul className="guide-table">
              <div className="label-drop">Sacraments</div>
              <div className="content-container">
                <div id="Baptism" className="content">
                  Baptism
                </div>
                <div id="Confession/Reconsilation" className="content">
                  Confession/Reconsilation
                </div>
                <div id="Confirmation" className="content">
                  Confirmation
                </div>
                <div id="First Holy Comunnion" className="content">
                  First Holy Comunnion
                </div>
                <div id="Holy Orders" className="content">
                  Holy Orders
                </div>
                <div id="Marriage" className="content">
                  Marriage
                </div>
                <div id="Anointing of the Sick" className="content">
                  Anointing of the Sick
                </div>
              </div>
            </ul>
          </section>
        )
    }
}
