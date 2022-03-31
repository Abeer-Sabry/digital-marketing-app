import React from "react";
// ---- CONSTANTS ---- //
import { FlexDiv, MainWrapper } from "../../constants";
// ---- STYLED-COMPONENTS ---- //
import { ImgContainer, Info } from "./AboutUsStyle";
// ---- IMG ---- //
import illustration from "../../imgs/Illustration.png";
// ---- REUSABLE-COMPONENTS  ---- //
import { OrangeSpan } from "../../reusableComponents/OrangeSpan/OrangeSpan";
import { HeadTitle } from "../../reusableComponents/HeadTitle/HeadTitle";
import Button from "../../reusableComponents/SelectButton/SelectButton";

const AboutUs = () => {
  return (
    <MainWrapper id="about">
      <FlexDiv>
        <ImgContainer>
          <img src={illustration} alt="Start Business With US" />
        </ImgContainer>

        <Info>
          <OrangeSpan>About us</OrangeSpan>
          <HeadTitle>Start Business With US</HeadTitle>
          <p>
            Over 12 years Demo helping companies to reach their <br />
            financial and branding goals.
          </p>
          <p className="content">
            Over the years, we have worked with Fortune 500s and brand-new startups <br /> We help ambitious businesses
            like yours generate more profits by building <br /> awareness, driving web traffic, connecting with
            customers, and growing <br /> overall sales. Give us a call.
          </p>
          <Button>Get Started now</Button>
        </Info>
      </FlexDiv>
    </MainWrapper>
  );
};

export default AboutUs;
