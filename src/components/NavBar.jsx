import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {
    drop: false,
    hide: false,
    start: true,
    counter: 0
  };
  droper = (e) => {
    this.setState({
      drop: true,
      hide: false,
      start: false,
      counter: e,
    });
  };
  hide = (e) => {
    this.setState({
      drop: false,
      hide: true,
      counter: e,
    });
  };
  animate=(e)=>{
     let bCounter= e
      if(this.state.drop === false && this.state.hide=== false && this.state.start === true ){
          return 'start'
      } else if(this.state.drop === true && this.state.hide=== false && this.state.start === false && bCounter === this.state.counter){
        return 'drop'
    }else if(this.state.drop === false && this.state.hide=== true && this.state.start === false && bCounter === this.state.counter){
        return 'hide'
    }
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1 className="title-site">
            <span className="title-site--main">ST. JOHN THE APOSTLE</span>
            <span className="title-site--sub">CATHOLIC CHURCH</span>
          </h1>
        </Link>
        <div className="navbar-box menu">
          <div className="navbar-box-btn">
            <Link to="/sacraments">Sacraments</Link>
            <div   id='sacr' className='dropdwn-container'>
              <ul className="dropdwn-list sacra">
                <Link to="/sacraments">
                  <p className="dropdwn-text">Baptism</p>
                </Link>
                <Link to="/sacraments">
                  <p className="dropdwn-text">Confession/Reconsilation</p>
                </Link>
                <Link to="/sacraments">
                  <p className="dropdwn-text">Confirmation</p>
                </Link>
                <Link to="/sacraments">
                  <p className="dropdwn-text">First Holy Comunnion</p>
                </Link>
                <Link to="/sacraments">
                  <p className="dropdwn-text">Holy Orders</p>
                </Link>
                <Link to="/sacraments">
                  <p className="dropdwn-text">Marriage</p>
                </Link>
                <Link to="/sacraments">
                  <p className="dropdwn-text">Anointing of the Sick</p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar-box-btn">
            <Link to="/about">About our Parish</Link>
            <div id="about" className="dropdwn-container">
              <ul className="dropdwn-list abou">
                <Link to="/about">
                  <p className="dropdwn-text">History</p>
                </Link>
                <Link to="/about">
                  <p className="dropdwn-text">Our Patron Saints</p>
                </Link>
                <Link to="/about">
                  <p className="dropdwn-text">Ministries</p>
                </Link>
                <Link to="/about">
                  <p className="dropdwn-text">Bulletin</p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar-box-btn">
            <Link to="/more">More</Link>
            <div className="dropdwn-container">
              <ul id="more"  className="dropdwn-list mor">
                <Link to="/more">
                  <p className="dropdwn-text">Mass Scheldue</p>
                </Link>
                <Link to="/more">
                  <p className="dropdwn-text">Faith Information</p>
                </Link>
                <Link to="/more">
                  <p className="dropdwn-text">News and Events</p>
                </Link>
                <Link to="/more">
                  <p className="dropdwn-text">Contact Us</p>
                </Link>
                <Link to="/more">
                  <p className="dropdwn-text">School</p>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {console.log(this.state)}
      </div>
    );
  }
}

export default NavBar;
