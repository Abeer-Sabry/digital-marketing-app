import React from "react";
// ----  STYLED-COMPONENTS ---- //
import { HeadingInfo, ContentWrapper, DivInfo, MainDiv, OverLay, Social, DivButton } from "./TeamStyle";
// ---- CONSTANTS ---- //
import { MainWrapper } from "../../constants";
// ---- REUSABLE-COMPONENTS ---- //
import { HeadTitle } from "../../reusableComponents/HeadTitle/HeadTitle";
import { OrangeSpan } from "../../reusableComponents/OrangeSpan/OrangeSpan";
import Button from "../../reusableComponents/SelectButton/SelectButton";
// ---- IMGS ---- //
import member1 from "../../imgs/member1.png";
import member2 from "../../imgs/member2.png";
import member3 from "../../imgs/member3.png";
// --- ICONS --- //
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <MainWrapper>
      <HeadingInfo>
        <OrangeSpan>Professional Team</OrangeSpan>
        <HeadTitle>Meet Our Leadership Team</HeadTitle>
      </HeadingInfo>
      <MainDiv>
        <DivInfo>
          <img src={member1} alt="" />
          <OverLay className="overlay" />
          <ContentWrapper className="content">
            <HeadTitle>Jason Smith</HeadTitle>
            <p>Digital Marketer</p>
            <Social className="social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <BsInstagram />
              </span>
            </Social>
          </ContentWrapper>
        </DivInfo>
        <DivInfo>
          <img src={member2} alt="" />
          <OverLay className="overlay" />
          <ContentWrapper className="content">
            <HeadTitle>Jane Taylor</HeadTitle>
            <p>Digital Marketer</p>
            <Social className="social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <BsInstagram />
              </span>
            </Social>
          </ContentWrapper>
        </DivInfo>
        <DivInfo>
          <img src={member3} alt="" />
          <OverLay className="overlay" />
          <ContentWrapper className="content">
            <HeadTitle>Cheryl Grower</HeadTitle>
            <p>Digital Marketer</p>
            <Social className="social">
              <span>
                <FaFacebookF />
              </span>
              <span>
                <BsTwitter />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <BsInstagram />
              </span>
            </Social>
          </ContentWrapper>
        </DivInfo>
      </MainDiv>
      <DivButton>
        <Button>see more</Button>
      </DivButton>
    </MainWrapper>
  );
};

export default Team;
