import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarshow = !["/Portfolio"].includes(location.pathname);

  const onclickhome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link
          onClick={() => {
            onclickhome();
          }}
          smooth={true}
          duration={500}
          className="home"
          offset={-70}
        >
          <li className="list-hover">Home</li>
        </Link>
        {navbarshow && (
          <>
            <Link
              to="portfolios"
              smooth={true}
              duration={500}
              className="about"
              offset={-70}
            >
              <li className="list-hover">Projects</li>
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="contact"
              offset={-70}
            >
              <li className="list-hover">Contact</li>
            </Link>
          </>
        )}
      </ul>
      {/* <Button variant="contained" color="warning">
        Let's talk
      </Button> */}
      <button
        className="mobile-menu-icons"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
