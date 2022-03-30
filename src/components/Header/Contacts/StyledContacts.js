import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue } from "../../../constants";

export const ContactWrapper = styled.div`
  background-color: ${darkBlue};
`;
export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  @media only screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  p {
    color: white;
    font-size: 13px;
    /* RESPONSIVE */
    @media only screen and (max-width: 991px) {
      font-size: 11px;
    }
    @media only screen and (max-width: 780px) {
      margin-bottom: 5px;
      font-size: 10px;
    }
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  /* RESPONSIVE */
  @media only screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  svg,
  p {
    color: white;
    font-size: 14px;
    /* RESPONSIVE */
    @media only screen and (max-width: 991px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 780px) {
      font-size: 11px;
    }
    @media only screen and (max-width: 380px) {
      margin-bottom: 5px;
    }
  }
  svg {
    margin-right: 5px;
  }
`;
export const Social = styled.span`
  svg {
    margin-right: 5px;
    color: ${darkBlue};
    font-size: 13px;
    background-color: white;
    width: 13px;
    height: 13px;
    padding: 2px;
    border-radius: 2px;
    @media only screen and (max-width: 991px) {
      width: 12px;
      height: 12px;
      padding: 2px;
    }
    @media only screen and (max-width: 780px) {
      width: 11px;
      height: 11px;
      padding: 2px;
    }
  }
`;
