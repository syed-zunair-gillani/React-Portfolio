import React from "react";
import "../Intro/intro.scss";
import img from '../../asset/img/intro.jpg'


export default function Intro() {
  return (
    <>
      <section id="about" className="intro-wrapper">
        <h4>Hello We Are Developer</h4>
        <div className="intro-left">
          <h2>We help to create stunning & modren website.</h2>
          <p>
            I craft and bring to you quality products from start to end , expert
            in responsive Web designing & development, branding, <span style={{color: "#FF014F"}}>E-commerce </span>
             solutions and <span style={{color: "#FF014F"}}>WordPress</span> Maintenance, Security, Backups & Support and<span style={{color: "#FF014F"}}> React Js</span>.
          </p>
        </div>
        <div className="intro-right">
            <img src={img} alt="" />
        </div>
      </section>
    </>
  );
}
