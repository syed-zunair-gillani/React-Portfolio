import React from "react";
import "../Footer/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="top container">
          <div className="intro">
            <h1>ZUNAIR</h1>
            <p>
              We support programs that create advancement opportunities for
              people.
            </p>
          </div>
          <div className="follow">
            <h2>FOLLOW US</h2>
            <div className="link">
              <span>
                <Link href="">Facebook</Link>
              </span>
              <span>
                <Link href="">Instagram</Link>
              </span>
              <span>
                <Link href="">Linkedin</Link>
              </span>
            </div>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <div className="link">
              <div className="link">
                <span>
                  <Link href="">
                    <strong>N: </strong> +92301 567 2954
                  </Link>
                </span>
                <span>
                  <Link href="">
                    <strong>S: </strong> +92301 567 2954
                  </Link>
                </span>
                <span>
                  <Link href="">
                    <strong>G: </strong> zunairgillani54@gmail.com
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="address">
            <h2>Address</h2>
            <p className="address-content">
              Walton street 7 Lahore, <br />
              Cent Pakistan
            </p>
          </div>
        </div>
      </footer>
      <div className="footer-menu">
        <div className="menu">
          <span>
            <Link href="">Home</Link>
          </span>
          <span>
            <Link href="">About</Link>
          </span>
          <span>
            <Link href="">Services</Link>
          </span>
          <span>
            <Link href="">Portfolio</Link>
          </span>
          <span>
            <Link href="">Contact</Link>
          </span>
        </div>
      </div>
      <div className="copyright">
          <p>© 2021 ZUNAIR</p>
          <p className="design">Designed by <span>Syed Zunair Gillani</span></p>
      </div>
    </>
  );
}
