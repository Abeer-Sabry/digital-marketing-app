import styled from "styled-components";

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media only screen and (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 801px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }
`;
export const Heading = styled.div`
  text-align: center;
  margin-bottom: 50px;
  span {
    display: inline-block;
    margin-bottom: 15px;
    font-weight: bold;
  }
  h1 {
    font-weight: 600;
  }
  @media only screen and (max-width: 494px) {
    h1 {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 341px) {
    h1 {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 310px) {
    h1 {
      font-size: 18px;
    }
  }
`;
