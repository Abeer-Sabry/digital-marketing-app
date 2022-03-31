import styled from "styled-components";
// ---- COLORS --- //
import { orange } from "../../constants";

export const SelectButton = styled.button`
  background-color: ${orange};
  color: white;
  outline-style: none;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  svg {
    margin-left: 5px;
  }
`;
export const ShadowButton = styled(SelectButton)`
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);

  /* Responsive */
  @media only screen and (max-width: 992px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 392px) {
    font-size: 9px;
  }
`;
