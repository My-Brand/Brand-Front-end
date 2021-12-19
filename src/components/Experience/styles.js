import styled from 'styled-components';

export const CompanyLogoCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 12px solid var(--whiteGrey);
  position: absolute;
  left: 0;
  top: 50%;
  bottom: 0;
  transform: translateY(-50%) translateX(-50%);
  display: grid;
  place-content: center;

  img {
    width: 100px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateY(-50%) translateX(-50%);

    img {
      width: 50px;
    }
  }
`;

export const ExperienceContentsContainer = styled.section`
  padding: 64px;
  padding-left: 160px;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    background-color: transparent;
    padding: 80px 0 16px 0;
    margin: 50px 0 120px 0;
    transform: translateX(1%);
  }
`;

export const ExperienceYears = styled.span`
  display: block;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--hoverColor);
  }
`;

export const HeadSub = styled.span`
  font-size: 12px;
`;

export const ExperienceFooter = styled.div`
  font-size: 14px;

  @media screen and (max-width: 768px) {
    margin-top: 4rem !important;
  }
`;
