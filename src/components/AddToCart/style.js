import styled from 'styled-components'

export const AddToCartElement = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1em;
  padding: .3em .3em;
  border: 1px solid var(--brand-primary-light);
  border-radius: 4px;
  background-color: var(--lightest);
`

export const CounterValue = styled.input`
  width: 15%;
  border: 0;
  text-align: center;
  font-size: 16px;
`

export const CounterButton = styled.button`
  border: 0;
  padding: .4em .8em;
  text-align: center;
  font-size: 18px;
  background-color: transparent;
  color: var(--brand-primary);
  cursor: pointer;
`

export const toCartButton = styled.button`
  width: 47%;
  height: 52px;
  border: 0;
  border-radius: 4px;
  font-family: 'Oswald';
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--lightest);
  cursor: pointer;
  transition: background-color .3s ease-in;
  
`

export const AddToCartButton = styled(toCartButton)`
  background-color: var(--brand-primary-dark);
  &:hover {
    background-color: #c96903;
  }
`

export const RemoveToCartButton = styled(toCartButton)`
  background-color: var(--text-dark);
`
