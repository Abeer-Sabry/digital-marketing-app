import React, { useState } from "react";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../../constants";
// ---- STYLE ----//
import { NavWrapper, ResList, Wrapper } from "./ResNavStyle";
// ---- IMG ---- //
import logo from "../../../imgs/Logo.png";
//---- REACT-ICONS ---- //
import { FaAlignJustify } from "react-icons/fa";
// ---- REACT-SCROLL ---- //
import { Link } from "react-scroll";

const ResNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <NavWrapper>
      <CustomContainer>
        <Wrapper>
          <img src={logo} alt="" />
          <span onClick={() => setToggle(!toggle)}>
            <FaAlignJustify />
          </span>
        </Wrapper>
        {toggle && (
          <ResList>
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
          </ResList>
        )}
      </CustomContainer>
    </NavWrapper>
  );
};

export default ResNav;
