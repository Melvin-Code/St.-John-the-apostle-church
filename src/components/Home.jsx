import React, { Component } from "react";

import Footer from "./partials/Footer";
import Hotlinks from "./partials/Hotlinks";

class Home extends Component {
  state = {
    nonHove: "hp-link-start",
    barColor: "",
    textPos: "",
  };
  onMe = () => {
    this.setState({
      nonHove: "hp-link-full",
      barColor: "grey",
      textPos: "textdw",
    });
  };
  outOfMe = () => {
    this.setState({
      nonHove: "hp-link-empty",
      barColor: "",
      textPos: "",
    });
  };
  render() {
    return (
      <div className="homePage">
        <div className="hp-herocontainer">
          <div className="overlay">
            <h2 className="herocontainer-slogan">
              ONE HEART, ONE FAITH, ONE CHURCH
            </h2>
            <div className="herocontainer-welcomecontainer">
              <h3 className="herocontainer-welcometext">WELCOME</h3>
              <p className="herocontainer-welcometext--sub">
                We are the community of St. John the Apostle Catholic Church,
                located in Hialeah, Florida since 1945 We are a welcoming and
                loving community rooted in the gospels of Jesus Christ, and
                value the teachings of our Lord. We are committed to value all
                human beings with dignity, self worth and to recognize the
                perfectly created beauty God gave us within each other.
              </p>
            </div>
          </div>
        </div>
        <div className="homepage-links">
          <Hotlinks
            bImage="/sacraments.jpg"
            titleText="Sacraments"
            link="/sacraments"
          />
          <Hotlinks
            bImage="https://denvercatholic.org/wp-content/uploads/2019/02/josh-applegate-141715-unsplash-924x600.jpg"
            titleText="Marriage"
            link="/sacraments"
          />
          <Hotlinks
            bImage="https://uploads.weconnect.com/a246e1295ceb3d143f283190838b9f5b67954aa3/evtvbs4alg6jg1t11xmk0kk78pl.jpg"
            titleText="Ministries"
            link="/sacraments"
          />
        </div>
        
        {console.log(this.state)}
        <Footer/>
        
      </div>
    );
  }
}

export default Home;
