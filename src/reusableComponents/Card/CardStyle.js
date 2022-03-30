import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue, darkGray, orange } from "../../constants";
// ---- IMGS ---- //
import rectangle from "../../imgs/Rectangle 506.png";
export const CardWrapper = styled.div`
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  transition: ease 0.3s;
  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    h3 {
      color: ${orange};
    }
  }
`;

export const ImgWrapper = styled.div`
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
  padding-top: 20px;
  height: 340px;
  /* Responsive */
  @media only screen and (max-width: 1170px) {
    height: 320px;
  }
  @media only screen and (max-width: 1150px) {
    height: 300px;
  }
  @media only screen and (max-width: 1100px) {
    height: 290px;
  }
  @media only screen and (max-width: 1020px) {
    height: 270px;
  }
  @media only screen and (max-width: 991px) {
    height: 340px;
  }
  @media only screen and (max-width: 850px) {
    height: 320px;
  }
  @media only screen and (max-width: 801px) {
    height: 490px;
  }
  @media only screen and (max-width: 701px) {
    height: 460px;
  }
  @media only screen and (max-width: 601px) {
    height: 430px;
  }
  @media only screen and (max-width: 501px) {
    height: 390px;
  }
  @media only screen and (max-width: 451px) {
    height: 320px;
  }
  @media only screen and (max-width: 401px) {
    height: 300px;
  }
  @media only screen and (max-width: 351px) {
    height: 270px;
  }
  @media only screen and (max-width: 351px) {
    height: 240px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CardContent = styled.div`
  padding: 25px 20px;
  text-align: center;
  h3 {
    color: ${darkBlue};
    transition: ease 0.3s;
    margin-bottom: 13px;
    font-weight: 600;
  }
  p {
    color: ${darkGray};
    font-size: 13.5px;
  }
  @media only screen and (max-width: 1122px) {
    p {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 1100px) {
    p {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 1020px) {
    p {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 991px) {
    p {
      font-size: 13.5px;
    }
  }
  @media only screen and (max-width: 801px) {
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 13.5px;
    }
  }
  @media only screen and (max-width: 351px) {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 301px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 11px;
    }
  }
`;
