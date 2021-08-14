import styled from 'styled-components';

export const MyInterestCard = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;

  &:hover p {
    display: block;
  }

  &:hover div {
    animation: interestDesc 0.5s 1 ease-in-out;
  }
`;

export const InterestImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const InterestsContainer = styled.div`
  width: 85%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InterestsContainerOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  position: absolute;
  height: fit-content;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  padding: 24px 12px;
`;

export const InterestDescription = styled.p`
  display: none;
  margin-top: 16px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    display: block;
    opacity: 1;
    font-size: 10px;
  }
`;
