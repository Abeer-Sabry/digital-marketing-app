import React from "react";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";
// ---- STYLED-COMPONENT ---- //
import {
  CopyRight,
  Demo,
  FooterForm,
  FooterList,
  FooterWrapper,
  NewSletter,
  SpanTitle,
  Subscribe,
} from "./FooterStyle";
// ---- IMG ---- //
import startUp from "../../imgs/startup.png";
import logo from "../../imgs/Logo.png";
// ---- REUSABLE-COMPONENTS ---- //
import { SelectButton } from "../../reusableComponents/SelectButton/SelectButtonStyle";
// ---- ICONS ---- //
import { BsTwitter, BsInstagram, BsFillTelephoneFill, BsClockFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

// ---- REACT-ROUTER-DOM ---- //
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <CustomContainer>
          <Subscribe>
            <NewSletter>
              <img src={startUp} alt="" />
              <div>
                <h2>Subscribe For Newsletter</h2>
                <p>Grow Your Business With Us</p>
              </div>
            </NewSletter>
            <FooterForm>
              <input type="text" placeholder="Enter Your Mail" />
              <SelectButton>let's start</SelectButton>
            </FooterForm>
          </Subscribe>

          {/* SECOND-PART */}
          <Demo>
            <div className="firstDiv">
              <img src={logo} alt="" />
              <p>Sed diam nonumy eirmod tempor invidunt ut labore dolore magna. At vero eos et accusam.</p>
              <div className="social">
                <FaFacebookF />
                <BsTwitter />
                <FaLinkedinIn />
                <BsInstagram />
              </div>
            </div>
            <div>
              <SpanTitle>Agency</SpanTitle>
              <FooterList>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Our Team</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Portfolio</Link>
                </li>
              </FooterList>
            </div>
            <div>
              <SpanTitle>Services</SpanTitle>
              <FooterList>
                <li>
                  <Link to="/">Digital Analytics</Link>
                </li>
                <li>
                  <Link to="/">Page Ranking</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Target Advertising</Link>
                </li>
                <li>
                  <Link to="/">Content Marketing</Link>
                </li>
              </FooterList>
            </div>
            <div>
              <SpanTitle>Resources</SpanTitle>
              <FooterList>
                <li>
                  <Link to="/">Job Opportunities</Link>
                </li>
                <li>
                  <Link to="/">Pricing Plan</Link>
                </li>
                <li>
                  <Link to="/">Testimonials</Link>
                </li>
                <li>
                  <Link to="/">Support Center</Link>
                </li>
                <li>
                  <Link to="/">Gallery</Link>
                </li>
              </FooterList>
            </div>
            <div>
              <SpanTitle>Contact Info</SpanTitle>
              <FooterList>
                <li>
                  <Link to="/">
                    {" "}
                    <IoLocation />
                    (800) 134-5678
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <BsFillTelephoneFill />
                    (800) 134-5678
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <IoIosMail />
                    info@demmoo.com
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsClockFill />
                    Mon – Sat <br />
                    10:00pm - 8:00pm
                  </Link>
                </li>
              </FooterList>
            </div>
          </Demo>
        </CustomContainer>
      </FooterWrapper>

      {/* COPYRIGHT PART */}
      <CopyRight>Copyright © 2022 Demo by @ABEER SABRY All Rights Reserved.</CopyRight>
    </>
  );
};

export default Footer;
