import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className= 'homePage'>
                <div className='hp-herocontainer'>
                    <h2 className='herocontainer-slogan'></h2>
                    <div className='herocontainer-welcomecontainer'>
                        <h3 className='herocontainer-welcometext'></h3>
                    </div>
                </div>
                <div className='homepage-links'>
                    <div className='hp-link-container'>
                        <div className='hp-link-onhoverscreen'>
                            <p className='onhoverscreen-text'></p>
                            <button className='onhoverscreen-button'></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;