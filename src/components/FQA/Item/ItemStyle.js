import styled from "styled-components";
// ---- COLORS ---- //
import { darkGray, orange } from "../../../constants";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: ${orange};
    width: 30px;
    height: 30px;
    line-height: 15px;
    text-align: center;
    border-radius: 50%;
    border: none;
    color: white;
  }
  /* Responsive */
  @media only screen and (max-width: 1157px) {
    h5 {
      font-size: 13px;
    }
    button {
      width: 20px;
      height: 20px;
      line-height: 10px;
    }
  }
  @media only screen and (max-width: 1102px) {
    h5 {
      font-size: 12px;
    }
    button {
      width: 20px;
      height: 20px;
      line-height: 10px;
    }
  }
  @media only screen and (max-width: 1035px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    h5 {
      font-size: 13px;
      margin-bottom: 10px;
    }
    .btn {
      width: 100%;
      text-align: right;
    }
    button {
      line-height: 10px;
    }
  }
  @media only screen and (max-width: 801px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h5 {
      font-size: 13px;
      margin-bottom: 0;
    }
    .btn {
      width: fit-content;
      text-align: right;
    }
    button {
      line-height: 10px;
    }
  }
  @media only screen and (max-width: 521px) {
    h5 {
      font-size: 12px;
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 490px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    h5 {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .btn {
      width: 100%;
      text-align: right;
    }
    button {
      line-height: 10px;
    }
  }
`;
export const SubContent = styled.div`
  transition: ease 0.5s;
  margin-top: 10px;
  line-height: 20px;
  color: ${darkGray};
  /* Responsive */
  @media only screen and (max-width: 1157px) {
    font-size: 13px;
  }
`;
