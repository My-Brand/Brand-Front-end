import styled from 'styled-components';

export const BackgroundCircleOne = styled.div`
  width: 40%;
  height: 900px;
  border-radius: 100%;
  opacity: 0.035;
  position: fixed;
  top: -65%;
  right: -10%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundCircleTwo = styled(BackgroundCircleOne)`
  top: -45%;
  right: -20%;
`;

export const BackgroundHillOne = styled.div`
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 15vh solid #919191;
  position: absolute;
  opacity: 0.1;
  animation: hill_animation 2s infinite linear;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundHillTwo = styled(BackgroundHillOne)`
  left: 29%;
  animation-delay: 1s;
`;

export const BackgroundHillThree = styled(BackgroundHillOne)`
  left: 58%;
`;

export const BackgroundHillsContainer = styled.div`
  width: 50%;
  height: 15vh;
  position: fixed;
  bottom: 0;
  right: 0;
`;
