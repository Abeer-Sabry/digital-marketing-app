import React from "react";
// ---- STYLED-COMPONENTS AND CUSTOM STYLING ---- //
import { FlexDiv, MainWrapper } from "../../constants";
import { ContentWrapper, ImgContainer, RankingSection } from "./ChooseUsStyle";
// ---- REUSABLE-COMPONENTS ---- //
import { OrangeSpan } from "../../reusableComponents/OrangeSpan/OrangeSpan";
import { HeadTitle } from "../../reusableComponents/HeadTitle/HeadTitle";
// ---- IMGS ---- //
import Ranking from "../../imgs/Ranking.png";
import Illustration from "../../imgs/chooseImg.png";

const ChooseUs = () => {
  return (
    <MainWrapper>
      <FlexDiv>
        <ContentWrapper>
          <OrangeSpan>WHY CHOOSE US</OrangeSpan>
          <HeadTitle>
            We Dedicated To Our <br /> Best Service
          </HeadTitle>
          <p>
            From Digital Analytics to Email Marketing, our team are true <br /> experts in their field.
          </p>
          <img src={Ranking} alt="" />
        </ContentWrapper>
        <ImgContainer>
          <img src={Illustration} alt="" />
        </ImgContainer>
      </FlexDiv>
      <RankingSection>
        <div>
          <h1>550+</h1>
          <p>ACTIVE CLIENTS</p>
        </div>
        <div>
          <h1>60+</h1>
          <p>TEAM ADVISORS</p>
        </div>
        <div>
          <h1>1,250+</h1>
          <p>PROJECTS DONE</p>
        </div>
        <div>
          <h1>14+</h1>
          <p>GLORIOUS YEARS</p>
        </div>
      </RankingSection>
    </MainWrapper>
  );
};

export default ChooseUs;
