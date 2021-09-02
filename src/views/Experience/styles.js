import styled from 'styled-components';

export const ExperienceContents = styled.section`
  padding: 64px;
  padding-left: 160px;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    background-color: transparent;
    padding: 0px;
    padding-top: 80px;
    margin: 50px 0 32px 0;
    transform: translateX(1%);
  }
`;

export const ExperienceYears = styled.span`
  display: block;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 4rem;
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
