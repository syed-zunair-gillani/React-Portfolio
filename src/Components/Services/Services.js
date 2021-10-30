import React from "react";
import "../Services/services.scss";
// import Data from '../Services/ServicesData.js'

export default function Services() {

  const Data = [
    { 
        id: 1, 
        icon: "fab fa-react", 
        title: "REACT Js DEVELOPMENT", 
        description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
        id: 2, 
        icon: "fab fa-react", 
        title: "Next Js DEVELOPMENT", 
        description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
        id: 3, 
        icon: "fab fa-wordpress", 
        title: "Wordpress", 
        description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
      id: 4, 
      icon: "fab fa-react", 
      title: "Woocommerce", 
      description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
      id: 5, 
      icon: "fab fa-react", 
      title: "Elementor", 
      description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    { 
      id: 6, 
      icon: "fab fa-react", 
      title: "Tailwind", 
      description: "Web design encompasses many different skills and disciplines in the production of all web.", 
    },
    
    
];

  return (
    <>

     

      <section className="container main-wrapper">
        <p>Our Services</p>
        <h2>New Branding Agency</h2>
        <div className="services-wrapper">

          {Data.map((props) => (
            <div className="card">
              <div className="services-card">
                <i className={props.icon}></i>
                <h3>{props.title}</h3>
                <p>
                  {props.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
