import React, { Component } from "react";

export default class Baptisim extends Component {
  render() {
    
    return (
      <div id="s-t" className="sacr-wrap">
        <div className="img-container">
          <img
            className="sacr-image"
            src= {this.props.pic}
            alt="sacrament"
          />
        </div>
        <h3 className="sacr-title">{this.props.name}</h3>
        <p className="sacr-text">{this.props.txt}</p>
      </div>
    );
  }
}
