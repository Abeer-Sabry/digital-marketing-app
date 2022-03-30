import React from "react";
// ----  STYLED-COMPONENTS AND CUSTOM STYLING ---- //
import { MainWrapper } from "../../constants";
import { MainDiv, Heading } from "./ServicesStyle";
// ---- REUSABLE-COMPONENTS ---- //
import Card from "../../reusableComponents/Card/Card";
import { OrangeSpan } from "../../reusableComponents/OrangeSpan/OrangeSpan";
import { HeadTitle } from "../../reusableComponents/HeadTitle/HeadTitle";
// ---- IMGS ---- //
import img1 from "../../imgs/card1.png";
import img2 from "../../imgs/card2.png";
import img3 from "../../imgs/card3.png";
import img4 from "../../imgs/card4.png";
import img5 from "../../imgs/card5.png";
import img6 from "../../imgs/card6.png";

const Services = () => {
  return (
    <MainWrapper id="services">
      <Heading>
        <OrangeSpan>OUR SERVICES</OrangeSpan>
        <HeadTitle>
          Get Benefits & Advantages <br /> From Our Services
        </HeadTitle>
      </Heading>
      <MainDiv>
        <Card
          img={img1}
          title="Digital Analytics"
          paragraph="Sed diam nonumy eirmod tempor invidunt  ut labore et dolore magna."
        />
        <Card
          img={img2}
          title="Content Marketing"
          paragraph="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
        />
        <Card
          img={img3}
          title="Social Marketing"
          paragraph="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
        />
        <Card
          img={img4}
          title="Target Advertising"
          paragraph="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
        />
        <Card
          img={img5}
          title="Email Marketing"
          paragraph="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
        />
        <Card
          img={img6}
          title="Page Ranking"
          paragraph="Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
        />
      </MainDiv>
    </MainWrapper>
  );
};

export default Services;
