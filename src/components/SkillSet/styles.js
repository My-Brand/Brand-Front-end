import styled from 'styled-components';

export const SkillCategoryContainer = styled.section`
  border-left: 4px solid var(--blue);
  width: 100%;
  position: relative;
  padding: 12px;
  padding-left: 32px;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    margin-left: 12px;
  }
`;

export const SkillCircleIndicator = styled.div`
  background: var(--white);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 4px solid var(--blue);
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(-50%) translateX(-55%);

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background: var(--blue);
    border-radius: 50px;
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translateX(-50%) translateY(-50%);
  }

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;

    &::before {
      width: 12px;
      height: 12px;
    }
  }
`;

export const SingelSkillContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 6px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillTitleAndRate = styled.div``;

export const RatesContainer = styled.div`
  margin-top: 6px;
  display: flex;
  column-gap: 6px;
`;
