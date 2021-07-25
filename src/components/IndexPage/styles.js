import styled from 'styled-components';

export const WelcomeContainer = styled.section`
  width: 40vw;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const IndexPageContainer = styled.section`
  padding: 0 120px;
  height: 100vh;
  display: grid;
  align-items: center;
  overflow-y: auto;
  z-index: 1;

  @media screen and (max-width: 768px) {
    padding: 0 0;
    margin-bottom: 0.6rem;
  }
`;

export const IndexPageContents = styled.section`
  padding: 120px 0;

  @media screen and (max-width: 768px) {
    padding: 32px;
  }
`;

export const ButtonNextIcons = styled.div``;

export const GetToKnowButton = styled.button`
  background: transparent;
  border: 3px solid var(--blue);
  border-radius: 6px;
  padding: 6px 16px;
  padding-right: 42px;
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 6px 12px;
    padding-right: 12px;
    column-gap: 0.5rem;
  }
`;

export const ButtonCircle = styled.div`
  background: transparent;
  width: 40px;
  height: 40px;
  border: 12px solid var(--blue);
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    border: 8px solid var(--blue);
  }
`;

export const CircleAndText = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
  align-items: center;
`;

export const HelloContainer = styled.span`
  display: flex;
  align-items: center;
  column-gap: 10px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NotifyIcon = styled.div`
  background: var(--red);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid var(--white);
  position: absolute;
  top: 16px;
  right: 4px;

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
    top: 8px;
    right: 0px;
  }
`;

export const MyLogoContainer = styled.div`
  position: relative;
`;

export const IndexButtonText = styled.span``;
