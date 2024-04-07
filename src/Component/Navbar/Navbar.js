import React, { useState } from "react";
import "./Navbar.css";

import { BsMinecartLoaded } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from './logo.jpg'
import One from "./One";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
   function serc(){
    
    alert("hello")
    


   }
  return (

    <> 
<div className="sticky">
       <div className="headon">
        Free shipping on orders above Rs.1999/-
        </div>
      <nav className="main-nav">
        
        {/* 1st logo part  */}

        <NavLink to="/" className='logo ' >
       
    <img  id="fan" src={logo} alt=""   />
        </NavLink>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/About">About us</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
            <li>
              <NavLink to="/Search" >
                <CiSearch   id=" fab" className="facebook"/>
              
              </NavLink>
            
                    

                    </li>
             
            </li>
            <li>
            <NavLink to="/Add" >
              
            <BsMinecartLoaded  id="fan3" className="instagram"/>
              </NavLink>
             
                    
                    
             
            </li>
            
          </ul>

        
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      </div>


    </>
  );
};


export default Navbar;