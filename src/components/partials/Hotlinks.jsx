import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Hotlinks extends Component {
    state = {
    nonHove: "hp-link-start",
    barColor: "",
    textPos: '',
    background: this.props.bImage
  };
  onMe = () => {
    this.setState({
      nonHove: "hp-link-full",
      barColor: "grey",
      textPos: 'textdw'
    });
  };
  outOfMe = () => {
    this.setState({
      nonHove: "hp-link-empty",
      barColor: "",
      textPos: ''
    });
  };
    render() {
        return (
            <div
            onMouseOver={this.onMe}
            onMouseOut={this.outOfMe}
            id={this.state.barColor}
            className="hp-link-container"
            style={{backgroundImage: `url(${this.state.background})`}}
          >
              <div className={`hp-link-onhoverscreen ${this.state.nonHove} `}>
            <div id="setter">
                <p id={this.state.textPos} className="onhoverscreen-text">{this.props.titleText}</p>
                <button className="onhoverscreen-button">
                  <Link to='sacraments'>Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default Hotlinks;