import React from "react";
import "./Portfolio.scss";
import awi from "../../asset/img/projects/7awi.png"
import  linkessay from "../../asset/img/projects/linkessay.png"
import  hash21 from "../../asset/img/projects/hash21.png"
import { Link } from "react-router-dom";


export default function Portfolio() {
  
 

  return (
    <>
      <section className="portfolio-wrapper">
        <p>Our Portfolio</p>
        <h2>Resent Projects</h2>
        <div className="services-wrapper"></div>
      </section>
      <div className="container">
        <div className="card-wrapper">
            <div className="card" >
              <div class="img" style={{backgroundImage: `url('${awi}')`}}></div>
              <div className="border">
                <div className="inner">
                      <h1>7awi</h1>
                      <h4>Wordpress</h4>
                      <a href="#" target="_blank" >
                        <i class="fas fa-link"></i>    
                      </a>
                </div>
              </div>
            </div>
            <div className="card" >
              <div class="img" style={{backgroundImage: `url('${linkessay}')`}}></div>
              <div className="border">
                <div className="inner">
                      <h1>Linkessay</h1>
                      <h4>Wordpress</h4>
                      <a href="#" target="_blank" >
                        <i class="fas fa-link"></i>    
                      </a>
                </div>
              </div>
            </div>
            <div className="card" >
              <div class="img" style={{backgroundImage: `url('${hash21}')`}}></div>
              <div className="border">
                <div className="inner">
                      <h1>Hash21</h1>
                      <h4>Wordpress</h4>
                      <a href="#" target="_blank" >
                        <i class="fas fa-link"></i>    
                      </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="more-portfolio-btn">
        <Link to="/portfolio" className="btn">Load More</Link>
      </div>
    </>
  );
}
