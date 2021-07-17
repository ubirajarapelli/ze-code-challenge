import styled from 'styled-components'

export const AddressSuggestionElement = styled.div`
  position: relative;

  & label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  & input {
    position: relative;
    z-index: 20;
    width: 100%;
    max-width: 560px;
    padding: 16px 28px;
    border: 0;
    font-size: 18px;
    color: var(--text-dark);
    border-radius: 25px;
  }
`

export const AddressSuggestionListElement = styled.ul`
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style-type: none;
  background-color: var(--lightest);
  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 10;
    top: 26px;
    width: 30px;
    height: 30px;
    display: block;
    background-color: var(--lightest);
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`

export const AddressSuggestionListItemElement = styled.li`
  width: 100%;
  max-width: 560px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1em 1.7em;
  cursor: pointer;
  &:hover {
    background-color: var(--brand-primary-light);
  }
`
