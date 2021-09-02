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
