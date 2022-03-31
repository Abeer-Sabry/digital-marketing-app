import styled from "styled-components";
// --- COLORS
import { darkBlue, darkGray, lightBlue } from "../../../constants";

export const NavWrapper = styled.div`
  background-color: ${lightBlue};
  padding: 20px 0;
  display: none;

  /* Responsive */
  @media only screen and (max-width: 992px) {
    display: block;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;
  }
  svg {
    font-size: 28px;
    color: ${darkBlue};
    border: 1px solid ${darkBlue};
    border-radius: 2px;
    padding: 3px;
  }
`;
export const ResList = styled.ul`
  margin-top: 10px;
  transition: ease-in-out 0.5s;
  li {
    margin-bottom: 5px;
    color: ${darkGray};
  }
`;
