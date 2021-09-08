import styled from 'styled-components';

export const EntirePortfolioContainer = styled.section`
  min-height: 100vh;
  height: 100%;
  padding: 0 120px;
  display: grid;
  position: relative;
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

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'none'};
  flex-direction: ${(props) => props.direction || 'row'};
  column-gap: ${(props) => props.column_gap || '12px'};
  width: ${(props) => props.width || 'auto'};

  @media screen and (max-width: 768px){
    flex-direction: ${(props) => props.direction_sm || 'row'};
    text-align: ${(props) => props.direction_sm && 'center'};
    row-gap: ${(props) => props.direction_sm && '12px'};
    margin-bottom: 32px;
  }
`;

export const Div = styled.div``;
