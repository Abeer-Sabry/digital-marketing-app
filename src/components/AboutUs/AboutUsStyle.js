import styled from "styled-components";
// ---- COLORS ---- //
import { darkGray } from "../../constants";

export const ImgContainer = styled.div`
  img {
    width: 100%;
  }
  @media only screen and (max-width: 801px) {
    text-align: center;
    img {
      width: 90%;
    }
  }
`;
export const Info = styled.div`
  span {
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 10px;
  }
  h1 {
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    color: ${darkGray};
    margin-bottom: 40px;
    line-height: 25px;
  }
  .content {
    font-size: 14px;
  }
  @media only screen and (max-width: 1194px) {
    .content {
      font-size: 13.5px;
    }
  }
  @media only screen and (max-width: 1152px) {
    .content {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 1113px) {
    .content {
      font-size: 12.5px;
    }
  }
  @media only screen and (max-width: 1072px) {
    .content {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 1030px) {
    .content {
      font-size: 11.5px;
    }
  }
  @media only screen and (max-width: 991px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
    }
    .content {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 950px) {
    h1 {
      font-size: 27px;
    }
    p {
      font-size: 14px;
    }
    .content {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 867px) {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 13px;
    }
    .content {
      font-size: 9px;
    }
  }
  @media only screen and (max-width: 809px) {
    p {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 801px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 15px;
    }
    .content {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 491px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
    }
    .content {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 451px) {
    .content {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 410px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 12px;
    }
    .content {
      font-size: 9px;
    }
  }
  @media only screen and (max-width: 368px) {
    h1 {
      font-size: 23px;
    }
    p {
      font-size: 11px;
    }
    .content {
      font-size: 8.5px;
    }
  }
  @media only screen and (max-width: 348px) {
    h1 {
      font-size: 23px;
    }
    p {
      font-size: 11px;
    }
    .content {
      font-size: 8px;
    }
  }
  @media only screen and (max-width: 329px) {
    h1 {
      font-size: 23px;
    }
    p {
      font-size: 10px;
    }
    .content {
      font-size: 8px;
    }
  }
`;
