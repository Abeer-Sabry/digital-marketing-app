import React from "react";
// ---- STYLED-COMPONENTS  ---- //
import { CoverContainer, ImgContainer, Info, MainDiv } from "./CoverStyle";
// ---- CONSTANTS  ---- //
import { CustomContainer } from "../../../constants";
// ---- REUSABLE-COMPONENTS ---- //
import { HeadTitle } from "../../../reusableComponents/HeadTitle/HeadTitle";
import { OrangeSpan } from "../../../reusableComponents/OrangeSpan/OrangeSpan";
import Button from "../../../reusableComponents/SelectButton/SelectButton";
// ---- IMG ---- //
import Marketing from "../../../imgs/Graphics.png";

const Cover = () => {
  return (
    <CoverContainer id="home">
      <CustomContainer>
        <MainDiv>
          <Info>
            <HeadTitle>
              Grow Your <br />
              Business With <br /> <OrangeSpan>Digital Marketing</OrangeSpan>
            </HeadTitle>
            <p>
              Sed diam nonumy eirmod tempr invidunt ut labor et dolor magna <br /> aliquyam erat, sed diam voluptua.
            </p>
            <Button>get started now</Button>
          </Info>
          <ImgContainer>
            <img src={Marketing} alt="" />
          </ImgContainer>
        </MainDiv>
      </CustomContainer>
    </CoverContainer>
  );
};

export default Cover;
