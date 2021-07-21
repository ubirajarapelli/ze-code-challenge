import styled from 'styled-components'
  
export const HomeElement = styled.div`
  
  width: 86%;
  margin: 0 auto;

  & h1 {
    align-self: end;
    line-height: 1.2;
    text-transform: uppercase;
    font-family: 'Roboto Condensed';
    font-size: 52px;
    font-weight: 700;
    color: var(--lightest);

    & strong {
      font-family: 'Oswald';
      font-weight: 600;
      font-size: 64px;
      color: var(--text-dark);
    }
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-rows: 50% 45%;
    grid-gap: 5%;
    justify-content: center;
    height: 100%;
  }
`
