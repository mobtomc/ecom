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
        <div className="newsletter-section" id="contact">
            <div className="newsletter-content">
                <span className="big-text">ContactUs</span>
                <span className="small-text">
                   
Have questions or need assistance? Reach out to our dedicated customer support team. We're here to help you with any inquiries, feedback, or concerns. Contact us today!
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button className="bb">GetInTouchWithUs</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
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
