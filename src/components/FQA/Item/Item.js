import React, { useState } from "react";
// ---- STYLED-COMPONENTS ---- //
import { MainContent, SubContent, Wrapper } from "./ItemStyle";
// ---- ICONS ---- //
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Item = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      <MainContent>
        <h5>{title}</h5>
        <div className="btn">
          {" "}
          <button onClick={() => setToggle(!toggle)}>{toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
        </div>{" "}
      </MainContent>
      {toggle && <SubContent>{content}</SubContent>}
    </Wrapper>
  );
};

export default Item;
