import styled from "styled-components";
// ---- COLORS ---- //
import { darkBlue, darkGray, lightBlue } from "../../../constants";

export const NavContainer = styled.div`
  position: ${props => (props.scrolled ? "fixed" : "relative")};
  top: ${props => (props.scrolled ? "0" : "")};
  left: ${props => (props.scrolled ? "0" : "")};
  background-color: ${props => (props.scrolled ? darkBlue : lightBlue)};
  width: ${props => (props.scrolled ? "100%" : "")};
  padding: 20px 0;
  transition: ease 0.5s;
  /* Responsive */
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;
  }
`;
export const List = styled.ul`
  display: flex;
  li {
    text-transform: uppercase;
    font-size: 14px;
    margin-right: 20px;
    color: ${props => (props.scrolled ? "white" : darkGray)};
    cursor: pointer;
  }
`;
