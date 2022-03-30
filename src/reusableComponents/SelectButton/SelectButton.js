import React from "react";
// ---- ICONS ---- //
import { AiOutlineArrowRight } from "react-icons/ai";
import { ShadowButton } from "./SelectButtonStyle";

const Button = props => {
  return (
    <ShadowButton>
      {props.children}
      <AiOutlineArrowRight />
    </ShadowButton>
  );
};

export default Button;
