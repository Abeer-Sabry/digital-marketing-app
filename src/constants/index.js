// --- STYLED-COMPONENTS --- //
import styled from "styled-components";

// --- APP-CONTAINER --- //
export const CustomContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
// --- MAIN-WRAPPER --- //
export const MainWrapper = styled.div`
  padding: 60px 0 !important;
`;
export const FlexDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  justify-content: space-between;
  align-items: center;
  /* Responsive */
  @media only screen and (max-width: 801px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
    justify-content: space-between;
    align-items: center;
  }
`;

// --- COLORS --- //
export const lightBlue = "#F2F6FE";
export const darkBlue = "#2E4AA7";
export const orange = "#FC7E1A";
export const darkGray = "#404040";
