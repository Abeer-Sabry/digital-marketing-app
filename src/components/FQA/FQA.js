import React from "react";
// --- CONSTANTS --- //
import { FlexDiv, MainWrapper } from "../../constants";
// --- CONSTANTS --- //
import { ImgContainer, ContentContainer, Questions } from "./FQAStyle";
// --- IMGS --- //
import FQAImage from "../../imgs/FQA.png";
import { OrangeSpan } from "../../reusableComponents/OrangeSpan/OrangeSpan";
import { HeadTitle } from "../../reusableComponents/HeadTitle/HeadTitle";
// --- data --- //
import { data } from "./data";
// Component
import Item from "./Item/Item";

const FQA = () => {
  return (
    <MainWrapper>
      <FlexDiv>
        <ImgContainer>
          <img src={FQAImage} alt="" />
        </ImgContainer>
        <ContentContainer>
          <OrangeSpan>Some FAQ’s</OrangeSpan>
          <HeadTitle>
            Work With A Dedicated <br /> Digital Marketing Team
          </HeadTitle>
          <p>
            Sed diam nonumy eirmod tempor invidunt ut labore duo <br /> dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <Questions>
            {data.map(item => (
              <Item key={item.id} {...item} />
            ))}
          </Questions>
        </ContentContainer>
      </FlexDiv>
    </MainWrapper>
  );
};

export default FQA;
