import React from 'react';
import shopifyLogo from '../images/shopify-logo.svg'
import heroDown from '../images/icons/chevron-down.svg';


const Hero = () => {

    return (
        <div id="section1">
            <header>
                <img src={shopifyLogo} alt='shopify-logo' />
                <h1>The Shoppies</h1>
            </header>
            <div className="hero-footer">
                <div className="cta">
                    <h2>Select Your Top 5 Films</h2>
                    <img src={heroDown} alt="navigation down" onClick={() => document.getElementById('section2').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}/>
                </div>
            </div>
        </div>
    )
}
export default Hero;