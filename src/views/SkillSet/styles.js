import styled from 'styled-components';

export const SkillSetContainer = styled.section`
  width: 97%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TopThree = styled.span`
  background: var(--red);
  font-size: 10px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  transform: translateY(-50%);
  margin-left: 6px;
`;

export const StillLearningCont = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: fit-content;
  padding: 6px 12px;
  margin-left: 24px;
  border: 1px solid var(--white);

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    text-align: justify;
  }
`;
