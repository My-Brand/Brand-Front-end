import styled from 'styled-components';

export const SocialMediaIconsContainer = styled.div`
  position: absolute;
  width: auto;
  height: 100vh;
  right: 6rem;
  top: 50%;
  bottom: 0;
  transform: translateY(-50%);
  display: grid;
  place-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialMediaInnerContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
