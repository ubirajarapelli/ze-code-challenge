import styled from 'styled-components'

export const SocialLinksElement = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 128px;
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
`
