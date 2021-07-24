import styled from 'styled-components';

export const PortfolioMenuContainer = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 7.48rem;
  margin: 0 auto;
  margin-bottom: 140px;

  @media screen and (max-width: 768px) {
    width: 100%;
    column-gap: 0;
    margin-bottom: 100px;
    justify-content: space-between !important;
  }
`;

export const PortfolioMenuIcon = styled.div`
  border: 1px solid var(--grey);
  padding: 24px;
  display: grid;
  place-content: center;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    padding: 12px;
    border-radius: 6px;
  }
`;

export const EntirePortfolioContainer = styled.div`
  min-height: 70vh;
  width: 100%;
`;
