import styled from 'styled-components'

export const SocialLinksElement = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  
  list-style-type: none;
  font-size: 26px;

  & li {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  & a {
    color: var(--text-dark);
    transition: var(--link-transition);
    &:hover {
      color: var(--text-base);
    }
  }

  @media (min-width: 1280px) {
    padding-top: 128px;
    flex-direction: column;
    justify-content: center;
  }
`
