import styled from 'styled-components';

export const EntirePortfolioContainer = styled.section`
  height: 100vh;
  padding: 0 120px;
  display: grid;
  align-items: center;
  overflow-y: auto;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 0 0;
    height: calc(100% - 0.6rem);
  }
`;

export const EntirePortfolioContents = styled.section`
  padding: 120px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 32px;
  }
`;
