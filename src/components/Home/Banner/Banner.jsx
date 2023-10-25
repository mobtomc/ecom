import React from "react";
import "./Banner.scss";

import picse from "../../../assets/picse.png";


export default function Banner() {
  return (
    <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1 >Roshni</h1>
                    <p>
                      illuminating your way forward
                    </p>
                    <div className="ctas">
                       <a href="https://medium.com/@aryabhat99/illuminating-your-way-forward-roshni-1523b78ae0f5" ><div className="banner-cta">Read More</div></a>
                        <a href="#yahaScrollHo" className="hello"><div className="banner-cta v2">Shop Now</div></a>
                    </div>
                </div>
                <img className="banner-img " src={picse} alt="" />
            </div>
        </div>
  );
}
