import styled from 'styled-components'

export const HeaderElement = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--brand-primary-dark);
  background-color: rgba(255, 255, 255, .6);
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 25% 40% 20% 15%;
  align-items: center;

  @media (min-width: 1280px) { 
    grid-template-columns: auto 20% 10% 7%;
  }
`

export const LogoImage = styled.img`
  max-width: 85%;
  margin-left: 15%;

  @media (min-width: 1280px) { 
    margin-left: 4%;
  }
`

export const HeaderButton = styled.button`
  padding-top: 24px;
  padding-bottom: 24px;
  border: 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  cursor: pointer;
  transition: var(--link-transition);
`

export const Address = styled.address`
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-family: 'Roboto Condensed';

  &::before {
    content: 'Receba agora em:';
    display: block;
    padding-right: .8em;
    letter-spacing: 1px;
    font-family: 'Oswald';
    font-weight: 600;
    color: var(--brand-secondary);
  }

  @media (max-width: 767px) {
    padding-left: 10%;
  }
`

export const SignInButton = styled(HeaderButton)`
  font-weight: 500;
  background-color: var(--brand-primary-dark);
  color: var(--lightest);
  &:hover {
    background-color: #c96903;
  }
`

export const ShopBasketButton = styled(HeaderButton)`
  background-color: var(--lightest);
  color: var(--text-dark);
  & svg {
    transform: scale(1.8);
  }

`
