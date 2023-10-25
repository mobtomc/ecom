import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate=useNavigate()
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Illuminate your world with our stunning collection of lamps. Discover elegant designs, from modern to classic, crafted to enhance your space. Find the perfect lighting solution at our online lamp emporium.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                           Near St Marks school,MeeraBagh,New Delhi.
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9999960085</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: aryabhat99@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={()=>navigate(`/category/3`)}>Indoor Plants</span>
                    <span className="text" onClick={()=>navigate(`/category/4`)}>Outdoor Plants</span>
                    <span className="text" onClick={()=>navigate(`/category/5`)}>Edible Plants</span>
                    <span className="text" onClick={()=>navigate(`/category/6`)}>Rare Plants</span>
                    {/* <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span> */}
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        EComStore 2023 CREATED BY Aryan Bhat at SoftwareIndia
                    </span>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
