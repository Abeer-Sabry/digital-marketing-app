import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue, darkGray, orange } from "../../constants";
// ---- IMG ---- //
import background from "../../imgs/footerBackground.png";

export const FooterWrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding-top: 130px;
  padding-bottom: 100px;
`;
export const Subscribe = styled.div`
  background-color: ${darkBlue};
  padding: 40px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 781px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;
export const NewSletter = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 80px;
    margin-right: 20px;
  }
  h2,
  p {
    color: white;
  }
  h2 {
    margin-bottom: 10px;
  }
  /* Responsive*/
  @media only screen and (max-width: 1220px) {
    img {
      width: 70px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 902px) {
    img {
      width: 55px;
    }
    h2 {
      font-size: 17px;
    }
    p {
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 781px) {
    justify-content: center;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 449px) {
    img {
      width: 40px;
    }
    h2 {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 301px) {
    h2 {
      font-size: 13px;
    }
    p {
      font-size: 11px;
    }
  }
`;
export const FooterForm = styled.form`
  position: relative;
  text-align: right;

  input {
    width: 100%;
    padding: 17px;
    border-radius: 3px;
    border: none;
    @media only screen and (max-width: 1220px) {
      width: 80%;
    }
    @media only screen and (max-width: 902px) {
      font-size: 11px;
    }
    @media only screen and (max-width: 501px) {
      margin-bottom: 10px;
      width: 100%;
    }
    @media only screen and (max-width: 458px) {
      font-size: 9px;
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-20%, -50%);
  }
  @media only screen and (max-width: 781px) {
    text-align: center;
    button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-70%, -50%);
    }
  }
  @media only screen and (max-width: 576px) {
    button {
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 501px) {
    button {
      position: relative;
      transform: translate(0);
      top: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
export const Demo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px;
  margin-top: 70px;
  .firstDiv {
    img {
      width: 135px;
      margin-bottom: 7px;
    }
    p {
      font-size: 15px;
      margin-bottom: 30px;
    }
    .social {
      svg {
        margin-right: 7px;
        background-color: ${darkBlue};
        width: 25px;
        height: 25px;
        border-radius: 3px;
        padding: 5px;
        color: white;
        :nth-child(1) {
          background-color: ${orange};
        }
      }
    }
  }
  @media only screen and (max-width: 983px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
  @media only screen and (max-width: 370px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 40px;
  }
`;

export const SpanTitle = styled.div`
  font-size: 14px;
  color: ${darkGray};
  margin-bottom: 25px;
  font-weight: bold;
`;
export const FooterList = styled.ul`
  font-size: 14px;
  color: ${darkGray};
  margin-bottom: 30px;
  a {
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${darkGray};
    svg {
      margin-right: 7px;
    }
  }
`;
export const CopyRight = styled.div`
  background-color: ${darkBlue};
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 13px;
  @media only screen and (max-width: 470px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 385px) {
    font-size: 9px;
  }
`;
