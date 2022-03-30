import styled from "styled-components";

export const ImgContainer = styled.div`
  img {
    width: 90%;
  }
`;
export const ContentContainer = styled.div`
  h1 {
    font-weight: 600;
    margin-bottom: 15px;
  }
  p {
    font-size: 13px;
  }
  /* Responsive */
  @media only screen and (max-width: 1157px) {
    h1 {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 396px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 364px) {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
  }
`;
export const Questions = styled.div`
  margin-top: 20px;
`;
