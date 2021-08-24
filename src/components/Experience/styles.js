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
`;
