import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue, darkGray } from "../../constants";

export const ContentWrapper = styled.div`
  span {
    font-weight: bold;
    display: inline-block;
    margin-bottom: 13px;
  }
  h1 {
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    color: ${darkGray};
  }
  img {
    margin: 30px 0;
    width: 80%;
  }
  /* Responsive */
  @media only screen and (max-width: 1050px) {
    span {
      font-size: 13px;
    }
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
      color: ${darkGray};
    }
  }
  @media only screen and (max-width: 991px) {
    span {
      font-size: 15px;
    }
    h1 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 393px) {
    p {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 386px) {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 327px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 9px;
    }
  }
`;
export const ImgContainer = styled.div`
  img {
    width: 90%;
  }
`;
export const RankingSection = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  color: white;
  margin-top: 60px;
  position: relative;
  div {
    background-color: ${darkBlue};
    position: relative;
    padding: 50px 0;
    h1 {
      font-size: 50px;
    }
  }
  div:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }
  div:nth-child(4) {
    border-radius: 0 10px 10px 0;
  }
  div:nth-child(1)::after,
  div:nth-child(2)::after,
  div:nth-child(3)::after {
    content: "";
    position: absolute;
    z-index: 99;
    bottom: 0;
    right: 0;
    border-right: 1px solid white;
    width: 50px;
    height: 100%;
  }
  /* Responsive */
  @media only screen and (max-width: 1050px) {
    div {
      padding: 40px 0;
      h1 {
        font-size: 40px;
      }
    }
  }
  @media only screen and (max-width: 991px) {
    div {
      padding: 30px 0;
      h1 {
        font-size: 30px;
      }
    }
  }
  @media only screen and (max-width: 891px) {
    div {
      padding: 25px 0;
      h1 {
        font-size: 25px;
      }
    }
  }
  @media only screen and (max-width: 801px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3px;
    div {
      padding: 25px 0;
      border: 1px solid gray;
      border-radius: 10px;
      :nth-child(1),
      :nth-child(4) {
        border-radius: 10px;
      }
      &:after {
        display: none;
      }
      h1 {
        font-size: 25px;
      }
    }
  }
  @media only screen and (max-width: 451px) {
    div {
      padding: 20px 0;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  @media only screen and (max-width: 393px) {
    div {
      padding: 20px 0;
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  @media only screen and (max-width: 327px) {
    div {
      padding: 18px 0;
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 11px;
      }
    }
  }
`;
