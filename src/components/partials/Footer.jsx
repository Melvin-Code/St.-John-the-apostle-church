import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="loaction-holder">
          {/* <p className="holder-txt">Location</p> */}<div className='map-container'>
          <iframe
            
            title='mapframe'
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.3205307163093!2d-80.27498648497114!3d25.825981283607728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a6b8c72fb9%3A0x2a31fd8c67d4c759!2sSt%20John%20the%20Apostle%20Miami%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1601593988599!5m2!1sen!2sus"
            width="250"
            height="225"
            frameBorder="0"
            style={{ border: "0" }}
          ></iframe>
          </div>
        </div>
        <div className="adress-holder">
          <p className="holder-txt" id="multy-holder">
            <span className="txt-section">
              ST. JOHN THE APOSTLE CATHOLIC CHURCH
            </span>
            <span className="txt-section">
              475 E 4th STREET HIALEAH, FLORIDA 33010
            </span>
            <span className="txt-section">Phone: 305.888.9769</span>
            <span className="txt-section">​Email: sjamiami@gmail.com</span>
          </p>
        </div>
        <div className="contact-holder">
          <p className="holder-txt">Contact Us</p>
          <div>
            <a href='/' className="face-link">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href='/' className="email-link">
              <i className="far fa-envelope"></i>
            </a>
          </div>
          <div className="contact-sub--holder">
            <p className="subholder-txt">Subscribe today</p>
            <form className="contact-form">
              <label className="email-label">Email</label>
              <input className="input-bar" type="email" placeholder="email" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
