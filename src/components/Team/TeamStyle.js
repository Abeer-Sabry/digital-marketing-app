import styled from "styled-components";
import { orange } from "../../constants";

export const HeadingInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;
  h1 {
    font-weight: 600;
    font-size: 40px;
  }
  @media only screen and (max-width: 616px) {
    h1 {
      font-size: 35px;
    }
  }
  @media only screen and (max-width: 540px) {
    h1 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 463px) {
    h1 {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 385px) {
    span {
      font-size: 14px;
    }
    h1 {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 308px) {
    span {
      font-size: 13px;
    }
    h1 {
      font-size: 17px;
    }
  }
`;
export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  @media only screen and (max-width: 801px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const DivInfo = styled.div`
  position: relative;
  margin-bottom: 130px;
  &:hover {
    .overlay {
      opacity: 1;
    }
    .content {
      background-color: ${orange};
      overflow: visible;
      h1,
      p,
      svg {
        color: white;
      }
    }
    .social {
      bottom: 10px;
    }
  }
`;
export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(252, 126, 26, 0.5), rgba(46, 74, 167, 0.5));
  width: 100%;
  height: 99%;
  opacity: 0;
  transition: ease 0.5s;
  /* Responsive */
  @media only screen and (max-width: 801px) {
    height: 100%;
  }
`;
export const ContentWrapper = styled.div`
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px 0;
  width: 200px;
  height: 120px;
  text-align: center;
  overflow: hidden;
  transition: ease 0.5s;

  h1 {
    font-size: 17px;
    font-weight: 600;
    transition: ease 0.5s;
  }
  p {
    font-size: 13px;
    margin-bottom: 10px;
    transition: ease 0.5s;
  }
  svg {
    margin-right: 12px;
    font-size: 12px;
    transition: ease 0.5s;
  }
  /* Responsive */
  @media only screen and (max-width: 1190px) {
    width: 180px;
    height: 110px;
    bottom: -35%;
    h1 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
    svg {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 1130px) {
    width: 170px;
    height: 110px;
    bottom: -35%;
    h1 {
      font-size: 15px;
    }
    p {
      font-size: 11px;
    }
    svg {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 981px) {
    width: 150px;
    bottom: -43%;
    h1 {
      font-size: 14px;
      margin-bottom: 5px;
    }
    p {
      font-size: 10px;
    }
    svg {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 901px) {
    bottom: -48%;
  }
  @media only screen and (max-width: 870px) {
    bottom: -50%;
  }
  @media only screen and (max-width: 801px) {
    bottom: -24%;
    width: 270px;
    height: 150px;
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 15px;
    }
    svg {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 740px) {
    bottom: -25%;
  }
  @media only screen and (max-width: 701px) {
    bottom: -27%;
  }
  @media only screen and (max-width: 670px) {
    bottom: -29%;
  }
  @media only screen and (max-width: 603px) {
    bottom: -31%;
  }
  @media only screen and (max-width: 575px) {
    bottom: -33%;
  }
  @media only screen and (max-width: 520px) {
    bottom: -35%;
  }
  @media only screen and (max-width: 500px) {
    bottom: -37%;
  }
  @media only screen and (max-width: 471px) {
    bottom: -39%;
  }
  @media only screen and (max-width: 452px) {
    bottom: -41%;
    width: 200px;
    h1 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
    }
    svg {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 430px) {
    bottom: -45%;
  }
  @media only screen and (max-width: 401px) {
    bottom: -48%;
    width: 200px;
    h1 {
      font-size: 18px;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
    }
    svg {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 372px) {
    bottom: -40%;
    width: 200px;
    height: 120px;
  }
  @media only screen and (max-width: 353px) {
    bottom: -42%;
    width: 180px;
    height: 120px;
    h1 {
      font-size: 18px;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
    }
    svg {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 333px) {
    bottom: -45%;
    width: 160px;
    height: 120px;
  }
  @media only screen and (max-width: 315px) {
    bottom: -48%;
    width: 140px;
    height: 120px;
    h1 {
      font-size: 16px;
      margin-bottom: 5px;
    }
    p {
      font-size: 11px;
    }
    svg {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 290px) {
    bottom: -53%;
    width: 140px;
    height: 120px;
  }
`;
export const Social = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: ease 0.5s;
  width: 100%;
`;
export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
