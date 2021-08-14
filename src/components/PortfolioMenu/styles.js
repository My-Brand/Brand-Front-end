import styled from 'styled-components';

export const PortfolioMenuContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10%;
  margin: 0 auto;
  margin-bottom: 120px;
  margin-left: 5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    column-gap: 0;
    margin-left: 0;
    margin-bottom: 50px;
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
