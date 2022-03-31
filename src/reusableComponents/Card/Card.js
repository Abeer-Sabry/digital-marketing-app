import React from "react";
// ---- STYLED-COMPONENTS ---- //
import { CardContent, CardWrapper, ImgWrapper } from "./CardStyle";

const Card = props => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={props.img} alt="" />
      </ImgWrapper>
      <CardContent>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
