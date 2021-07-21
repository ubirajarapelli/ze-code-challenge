import styled from 'styled-components'

export const FooterElement = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid var(--brand-primary);
  font-size: 14px;
  background-color: var(--brand-primary-light);

  
  & div {
    display: grid;
    grid-row-gap: 1.5em;
    align-items: center;
    text-align: center;
  }

  & p {
    color: var(--text-darkest);
    font-family: 'Roboto Condensed';
    font-weight: 300;   
  }

  @media (min-width: 1280px) {
    & div {
      grid-template-columns: 1fr 1fr 1fr;
    }

    & p {
        &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
`
