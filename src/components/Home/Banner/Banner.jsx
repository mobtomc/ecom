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
                        <div className="banner-cta">Read More</div>
                        <a href="#yahaScrollHo" className="hello"><div className="banner-cta v2">Shop Now</div></a>
                    </div>
                </div>
                <img className="banner-img " src={picse} alt="" />
            </div>
        </div>
  );
}
