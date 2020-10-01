import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className='loaction-holder'>
          <p className="holder-txt">Location</p>
          <iframe className='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.3205307163093!2d-80.27498648497114!3d25.825981283607728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a6b8c72fb9%3A0x2a31fd8c67d4c759!2sSt%20John%20the%20Apostle%20Miami%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1601593988599!5m2!1sen!2sus"
            width="300"
            height="225"
            frameborder="0"
            style={{ border: "0" }}
            
          ></iframe>
        </div>
        <div className='adress-holder'>
          <p className='holder-txt' id='multy-holder'>
            <span>ST. JOHN THE APOSTLE CATHOLIC CHURCH</span>
            <span>475 E 4th STREET HIALEAH, FLORIDA 33010</span>
            <span>Phone: 305.888.9769</span>
            <span>​Email: sjamiami@gmail.com</span>
          </p>
        </div>
        <div>
          <p>Contact Us</p>
          <div>
            <a>
              <i class="fab fa-facebook-square"></i>
            </a>
            <a>
              <i class="far fa-envelope"></i>
            </a>
          </div>
          <div>
            <p>Subscribe today</p>
            <form>
              <label>Email</label>
              <input type="email" placeholder="email" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
