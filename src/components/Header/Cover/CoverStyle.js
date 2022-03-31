import styled from "styled-components";
// --- IMG --- //
import background from "../../../imgs/background.png";

export const CoverContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;
export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;

  /* Responsive */
  @media only screen and (max-width: 801px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Info = styled.div`
  width: 100%;
  h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }
  p {
    font-size: 13px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 1080px) {
    h1 {
      font-size: 45px;
    }
  }
  @media only screen and (max-width: 1050px) {
    h1 {
      font-size: 42px;
    }
  }
  @media only screen and (max-width: 992px) {
    h1 {
      font-size: 39px;
    }
  }
  @media only screen and (max-width: 950px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 801px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 651px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 551px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 27px;
    }
    p {
      font-size: 11px;
    }
  }
  @media only screen and (max-width: 392px) {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 11px;
    }
  }
`;
export const ImgContainer = styled.div`
  /* Responsive */
  @media only screen and (max-width: 801px) {
    text-align: center;
    img {
      width: 80%;
    }
  }
  @media only screen and (max-width: 451px) {
    img {
      width: 90%;
    }
  }
  @media only screen and (max-width: 392px) {
    text-align: center;
    img {
      width: 100%;
    }
  }
`;
