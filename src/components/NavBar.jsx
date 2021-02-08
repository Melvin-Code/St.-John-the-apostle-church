import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    drop: false,
    hide: false,
    start: true,
    counter: 0,
    changingBar: "white",
    loaction: window.location.pathname,
  };
  componentDidMount() {
    this.reaction();
    this.colorLoad();
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;

      if (window.location.pathname !== this.state.loaction) {
        this.setState({ loaction: window.location.pathname });
        if (this.state.loaction === "/" ) {
          if (scrolled >= 120) {
            if (this.state.status !== "amir") {
              this.setState({ status: "amir" });
            }
          } else {
            if (this.state.status !== "top") { 
              this.setState({ status: "top" });
            }
          }
        } else {
          this.setState({ status: "amir" });
          console.log("rrrrrr");
        }
      } else {
        if (this.state.loaction === "/") {
          if (scrolled >= 120) {
            if (this.state.status !== "amir") {
              this.setState({ status: "amir" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        } else {
          this.setState({ status: "amir" });
          console.log("rrrrrr");
        }
      }
    });
  }

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
  animate = (e) => {
    let bCounter = e;
    if (
      this.state.drop === false &&
      this.state.hide === false &&
      this.state.start === true
    ) {
      return "start";
    } else if (
      this.state.drop === true &&
      this.state.hide === false &&
      this.state.start === false &&
      bCounter === this.state.counter
    ) {
      return "drop";
    } else if (
      this.state.drop === false &&
      this.state.hide === true &&
      this.state.start === false &&
      bCounter === this.state.counter
    ) {
      return "hide";
    }
  };
  actions = () => {
    this.setState({ loaction: window.location.pathname });
  };
  reaction = () => {
    if (window.location.pathname !== this.state.loaction) {
      this.actions();
    }
  };
  colorChangeB = () => {
    this.setState({ status: "amir", loaction: window.location.pathname });
  };
  colorChangeW = () => {
    this.setState({ status: "top", loaction: window.location.pathname });
  };
  colorLoad = () => {
    console.log("run");
    if (this.state.loaction !== window.location.pathname) {
      this.setState({ loaction: window.location.pathname });
      if (this.state.loaction === window.location.pathname) {
        if (this.state.loaction !== "/") {
          console.log("blue");
          this.colorChangeB();
        } else {
          console.log("white");
          this.colorChangeW();
        }
      } else {
      }
    } else {
      if (this.state.loaction !== "/") {
        console.log("blue");
        this.colorChangeB();
      } else {
        console.log("white");
        this.colorChangeW();
      }
    }
  };

  render() {
    console.log(this.state.loaction);
    return (
      <div id={this.state.status} className="navbar">
        {console.log(window.location.pathname)}

        <Link onClick={this.colorChangeW} to="/">
          <h1 className="title-site">
            <span className="title-site--main">ST. JOHN THE APOSTLE</span>
            <span className="title-site--sub">CATHOLIC CHURCH</span>
          </h1>
        </Link>
        <div className="navbar-box menu">
          <div className="navbar-box-btn">
            <Link onClick={this.colorChangeB} to="/sacraments/baptisim">
              Sacraments
            </Link>
            <div id="sacr" className="dropdwn-container">
              <ul className="dropdwn-list sacra">
                <Link onClick={this.colorChangeB} to="/sacraments/baptisim">
                  <p className="dropdwn-text">Baptism</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/sacraments/ConfessionReconsilation">
                  <p className="dropdwn-text">Confession/Reconsilation</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/sacraments/Confirmation">
                  <p className="dropdwn-text">Confirmation</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/sacraments/FirstHolyComunnion">
                  <p className="dropdwn-text">First Holy Comunnion</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/sacraments/HolyOrders">
                  <p className="dropdwn-text">Holy Orders</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/sacraments/Marriage">
                  <p className="dropdwn-text">Marriage</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/sacraments/AnointingoftheSick">
                  <p className="dropdwn-text">Anointing of the Sick</p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar-box-btn">
            <Link onClick={this.colorChangeB} to="/about">
              About our Parish
            </Link>
            <div id="about" className="dropdwn-container">
              <ul className="dropdwn-list abou">
                <Link onClick={this.colorChangeB} to="/about/history">
                  <p className="dropdwn-text">History</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/about/ourpatronsaints">
                  <p className="dropdwn-text">Our Patron Saints</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/about/ministries">
                  <p className="dropdwn-text">Ministries</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/about">
                  <p className="dropdwn-text">Bulletin</p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar-box-btn">
            <Link onClick={this.colorChangeB} to="/more">
              More
            </Link>
            <div className="dropdwn-container">
              <ul id="more" className="dropdwn-list mor">
                <Link onClick={this.colorChangeB} to="/more">
                  <p className="dropdwn-text">Mass Scheldue</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/more">
                  <p className="dropdwn-text">Faith Information</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/more">
                  <p className="dropdwn-text">News and Events</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/more">
                  <p className="dropdwn-text">Contact Us</p>
                </Link>
                <Link onClick={this.colorChangeB} to="/more">
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
