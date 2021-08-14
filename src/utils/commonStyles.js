import styled from 'styled-components';

export const EntirePortfolioContainer = styled.section`
  min-height: 100vh;
  height: 100%;
  padding: 0 120px;
  display: grid;
  align-items: center;
  overflow-y: auto;
  z-index: 1;

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 50px);
    padding: 0 0;
  }
`;

export const EntirePortfolioContents = styled.section`
  padding: 120px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 32px;
  }
`;
