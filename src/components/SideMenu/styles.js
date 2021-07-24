import styled from 'styled-components';

export const StyledSideMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 4rem;
  z-index: 10;

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 100% !important;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }
`;

export const SideMenuContents = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: inherit;
  }
`;

export const SideMenuIconContainer = styled.div`
  display: grid;
  place-content: center;
`;

export const SideMenuToolTip = styled.div``;
