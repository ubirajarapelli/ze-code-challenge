import styled from 'styled-components'

export const OfferBannerElement = styled.div`
  height: 100%;
  padding-top: 42px;
  text-align: center;

  & img {
    width: 50%;
  }

  @media (min-width: 1280px) {
    & img {
      width: 75%;
    }
  }
`

export const OfferBannerCaption = styled.figcaption`
  width: 80%;
  padding: 0.3em;
  font-size: 24px;
  box-shadow: 0 0 10px var(--darkest);
  border-radius: 16px;
  background-color: var(--brand-primary-light);
  transform: rotate(-16deg) translateY(-170%) translateX(30%);

  & strong {
    text-transform: uppercase;
    font-family: 'Oswald';
    font-size: 32px;
    font-weight: 600;
  }

`
