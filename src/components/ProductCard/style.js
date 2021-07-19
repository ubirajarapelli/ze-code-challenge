import styled from 'styled-components'

export const ProductCardElement = styled.div`
  /* width: 256px; */
  display: flex;
  flex-direction: column;
  width: 260px;
  margin-bottom: 2em;
  padding: 1em;
  border: 1px solid var(--brand-primary-light);
  border-radius: 16px;
  transition: all .3s ease-in;
  &:hover {
    box-shadow: 0 0 15px rgba(52, 36, 12, .3);
    background-color: var(--brand-primary-light);
  }

  & + & {
    margin-top: 1em;
  }
`
export const ProductCardImage = styled.img`
  max-width: 180px;
  height: 180px;
  margin: 1em auto;
`

export const ProductCardTPrice = styled.p`
  font-family: 'Oswald';
  font-weight: 600;
  font-size: 18px;
  color: var(--brand-primary-dark);
`

export const ProductCardText = styled.p`
  height: 2em;
  margin-bottom: 1em;
  font-family: 'Roboto Condensed';
  color: var(--text-dark);
`

export const ProductCardTitle = styled.h2`
  height: 2.5em;
  margin-bottom: 8px;
  line-height: 1.2;
  font-family: 'Oswald';
  font-weight: 600;
  font-size: 22px;
`
