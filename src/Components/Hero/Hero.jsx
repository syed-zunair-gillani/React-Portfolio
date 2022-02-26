import React from "react";
import "../Hero/Hero.scss";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <>
    
      <section className="hero">
      
        <div className="content">
          <h1>
            Hello I'm Zunair<br/>
            <Typewriter
            words={['React js', 'Next js', 'Wordpress', 'Elementor Pro', 'Woocommerce' ]}
            loop={1000}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h1>
        </div>
        <div className="hero-social">
          <Link>
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link><i className="fab fa-instagram"></i></Link>
          <Link><i className="fab fa-linkedin-in"></i></Link>
          <Link>
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>
     
    </>
  );
}
