import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import AboutCards from "./partials/about/AboutCards";


export default class About extends Component {

  displaySections = (num) => {
    return num.map((e, i) => {
      return <AboutCards key={i} content={this.props.about.cards[i]} year={this.props.about.year ? this.props.about.year[i]: ''} ids={this.props.ids}  />;
    });
  };

  images = this.props.about.images;

  render() {
    return (
      <div className="about">
        <div>
          <img className="about-material" src={this.props.about.images} alt='material' />
          {/* <ImageGallery
            infinite
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={false}
            slideDuration={600}
            autoPla
            swipingTransitionDuration={20000}
            items={this.props.about.images}
            originalClass={"gallery"}
            showNav={false}
          /> */}
          <h2 className="phrase">{this.props.about.title}</h2>
        </div>

        <section className="about-txt">
        {this.displaySections(this.props.about.cards)}
        
          
         
          
          
        </section>
      </div>
    );
  }
}
