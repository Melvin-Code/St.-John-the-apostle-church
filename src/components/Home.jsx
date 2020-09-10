import React, { Component } from "react";

class Home extends Component {
  leslie(){
    
  }
  render() {
    return (
      <div className="homePage">
        <div className="hp-herocontainer">
          <h2 className="herocontainer-slogan">
            ONE HEART, ONE FAITH, ONE CHURCH
          </h2>
          <div className="herocontainer-welcomecontainer">
            <h3 className="herocontainer-welcometext">WELCOME</h3>
            <p className="herocontainer-welcometext--sub">
              We are the community of St. John the Apostle Catholic Church,
              located in Hialeah, Florida since 1945 We are a welcoming and
              loving community rooted in the gospels of Jesus Christ, and value
              the teachings of our Lord. We are committed to value all human
              beings with dignity, self worth and to recognize the perfectly
              created beauty God gave us within each other.
            </p>
          </div>
        </div>
        <div className="homepage-links">
          <div className="hp-link-container">
            <div className="hp-link-onhoverscreen">
              <p className="onhoverscreen-text"></p>
              <button className="onhoverscreen-button"></button>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Home;
