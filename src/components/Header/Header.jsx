import React, { useContext, useEffect, useState , useRef } from "react";
import "./Header.scss";
import { BiSearch } from "react-icons/bi";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from '../Cart/Cart'
import Search from "./Search/Search"
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

 export default function Header() {
  const {cartCount}=useContext(Context)

  const navigate= useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={()=>navigate("/")}>Home</li>
            <li ><a href="https://medium.com/@aryabhat99/illuminating-your-way-forward-roshni-1523b78ae0f5" >About</a></li>
            <li> <a href="#yahaScrollHo" >Categories</a></li>
            <li ><a href="#contact" >ContactUs</a> </li>
          </ul>
          <div className="center" onClick={()=>navigate("/")}>Roshni</div>
          <div className="right">
            <BiSearch onClick={()=>setShowSearch(true)}/>
            
            <span className="cart-icon">
              <AiOutlineShoppingCart onClick={()=>setShowCart(true)} />
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
}
