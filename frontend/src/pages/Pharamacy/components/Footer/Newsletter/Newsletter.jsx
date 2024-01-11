import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=10443416&style=0032&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>      
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
