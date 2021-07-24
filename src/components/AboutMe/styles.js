import styled from 'styled-components';

export const AboutContainer = styled.section`
  background: var(--white);
  padding: 32px;
  padding-left: 112px;
  width: 58vw;
  position: relative;
  margin-left: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding-top: 94px;
    padding-left: 32px;
    text-align: center;
  }
`;

export const AboutTextContainer = styled.section`
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutLogoContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--white);
  border: 6px solid var(--whiteGrey);
  position: absolute;
  top: 50%;
  left: -80px;
  transform: translateY(-50%);
  display: grid;
  place-content: center;

  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const AboutSocialMediaIconsContainer = styled.div`
  position: relative;
  height: auto;
  display: flex;
  column-gap: 45px;
  align-items: center;
  // background: blue;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    column-gap: 25px;
  }
`;
