import React, { useState } from "react";
// ---- COMPONENTS ---- //
import { SelectButton } from "../../../reusableComponents/SelectButton/SelectButtonStyle";
// ---- STYLED COMPONENTS AND CUSTOM STYLING ---- //
import { List, MainDiv, NavContainer } from "./NavbarStyle";
import { CustomContainer } from "../../../constants";
// ---- IMG ----//
import logo from "../../../imgs/Logo.png";
// ---- REACT-SCROLL ---- //
import { Link } from "react-scroll";

const Navbar = () => {
  // STATE
  const [scrolled, setScrolled] = useState(false);
  // SCROLL-FUNC
  const scrollFunc = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", scrollFunc);
  // ---- //
  return (
    <NavContainer scrolled={scrolled}>
      <CustomContainer>
        <MainDiv>
          <div>
            <img src={logo} alt="" />
          </div>
          <List scrolled={scrolled}>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={1000}>
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link to="services" smooth={true} duration={1000}>
                Services
              </Link>
            </li>
            <li>
              <Link to="pages">Pages</Link>
            </li>
            <li>
              {" "}
              <Link to="contact">Contact</Link>
            </li>
          </List>
          <SelectButton>get started</SelectButton>
        </MainDiv>
      </CustomContainer>
    </NavContainer>
  );
};

export default Navbar;
