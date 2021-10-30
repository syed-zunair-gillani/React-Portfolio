import React, { useState } from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import Avatar from '../../asset/img/avatar.jpg'



export default function Header() {

  const [toggle, setToggle] = useState(false)
  const [bgActive, setBgActive] = useState(false)
   
  const SetHeaderBg = () =>{
    if(window.scrollY >= 80){
      setBgActive(true);
    }else{
      setBgActive(false);
    }
  };
  window.addEventListener('scroll', SetHeaderBg);

  return (
    <>
      <header className={bgActive ? "active" : ""}>
        <div className= {`flex text-center sb align-center ${bgActive ? "logo-center" : ""}` }>
          <div className="flex align-center">
            <div className="logo-img ">
              <Link to="/">
                <img src={Avatar} alt="" />
              </Link>
            </div>
            <span>ZUNAIR</span>
          </div>
          <div className={bgActive ? "hide" : "show"}>
            <i className="fas fa-bars bar" onClick={() => setToggle(true)}></i>
          </div>
        </div>
      </header>

      <nav className={`nav ${toggle ? 'navopen' : 'navclose'}`}>
        <i className="fas fa-times times" onClick={() => setToggle(false)}></i>
        <ul className="ul">
          <Link to="/">
            <li data-text="Home">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
          </Link>
          <Link to="/portfolio">
            <li data-text="Portfolio">
              <i className="fas fa-briefcase"></i>
              <span>portfolio</span>
            </li>
          </Link>
          <Link to="/about">
            <li data-text="About">
              <i className="fas fa-user"></i>
              <span>about</span>
            </li>
          </Link>
          <Link to="/services">
            <li data-text="Services">
              <i className="fas fa-cog"></i>
              <span>services</span>
            </li>
          </Link>
          <Link to="/contact">
            <li data-text="Contact">
              <i className="fas fa-envelope"></i>
              <span>contact</span>
            </li>
          </Link>
        </ul>
        <div className="social">
          <Link>
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link><i className="fab fa-instagram"></i></Link>
          <Link><i className="fab fa-linkedin-in"></i></Link>
          <Link>
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
      </nav>

    </>
  );
}
