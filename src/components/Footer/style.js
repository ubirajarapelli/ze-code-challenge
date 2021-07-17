import styled from 'styled-components'

export const FooterElement = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid var(--brand-primary);
  font-size: 14px;
  background-color: var(--brand-primary-light);

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
  }

  & p {
    color: var(--text-darkest);
    font-family: 'Roboto Condensed';
    font-weight: 300;

    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
`
