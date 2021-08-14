import styled from 'styled-components';
import BackgroundImage from '../../assets/images/open-source.png';

export const AboutContainer = styled.section`
  background: var(--white) url(${BackgroundImage}) no-repeat;
  background-size: 25%;
  background-position: right 4rem center;
  padding: 64px;
  padding-left: 130px;
  width: 60%;
  position: relative;
  margin-left: 80px;

  @media screen and (max-width: 1610px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    background: transparent;
    width: 100%;
    margin-left: 0;
    padding: 0px;
    padding-top: 94px;
    margin-top: 100px;
    text-align: center;
  } ;
`;

export const AboutTextContainer = styled.section`
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutLogoContainer = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: var(--white);
  border: 12px solid var(--whiteGrey);
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
