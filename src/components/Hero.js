import React from 'react';
import shopifyLogo from '../images/shopify-logo.png'
import heroDown from '../images/chevron-down.png';
import navButton1 from '../images/nav-button-1.png';

const Hero = () => {

    return (
        <div className="section1">
            <header>
                <img src={shopifyLogo} alt='shopify-logo' width="299" height="188" />
                <h1>The Shoppies</h1>
            </header>
            <div className="hero-footer">
                <div className="cta">
                    <p>Select Your Top 5 Films</p>
                    <img src={heroDown} alt="navigation down" />
                </div>
                <div className="right-nav nav-buttons">
                    <img src={navButton1} alt="navigation down" />
                </div>
            </div>
        </div>
    )
}
export default Hero;