import React from "react";
// ---- COMPONENTS ---- //
import AboutUs from "../../components/AboutUs/AboutUs";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";
import FQA from "../../components/FQA/FQA";
// ---- CONSTANTS ---- //
import { CustomContainer } from "../../constants";

const Home = () => {
  return (
    <CustomContainer>
      <AboutUs />
      <Services />
      <ChooseUs />
      <Team />
      <FQA />
    </CustomContainer>
  );
};

export default Home;
