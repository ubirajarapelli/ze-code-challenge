import styled from 'styled-components'

export const CategoryFilterElement = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding-top: 16px;
  padding-bottom: 16px;
`
export const FilterCheckButton = styled.div`

  & label {
    padding: 8px 16px;
    font-family: 'Oswald';
    font-size: 18px;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: var(--brand-primary-light);
    }
  }

  & input[type="radio"] {
    position: absolute;
    left: -100vw;
  }

`
