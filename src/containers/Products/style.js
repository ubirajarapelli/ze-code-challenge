import styled from 'styled-components'

export const ProductsElement = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`
