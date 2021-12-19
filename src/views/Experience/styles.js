import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: calc(70% + 38px);

  @media screen and (max-width: 1610px) {
    width: calc(85% + 16px);
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
