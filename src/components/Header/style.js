import styled from 'styled-components'

export const HeaderElement = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, .6);

  & img {
    margin-left: 4%;
  }

  & nav {
    display: grid;
    grid-template-columns: auto 10% 10% 7%;
    align-items: center;
  }

  & button {
    &:first-child {
      
    }
    &:last-child {
      
    }
  }
`;

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

// export const SignInButton = styled(HeaderButton)`
//   font-weight: 600;
//   background-color: transparent;
//   &:hover{
//     background-color: var(--lightest);
//   }
// `
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
