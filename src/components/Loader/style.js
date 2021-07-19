import styled from 'styled-components'

export const LoaderElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 48px;
  font-family: 'Oswald';
  color: var(--lightest);
  background-color: rgba(0, 0, 0, .7);
`;
