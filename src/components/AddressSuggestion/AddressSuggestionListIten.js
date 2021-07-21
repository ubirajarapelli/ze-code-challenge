import React from 'react'
import { AddressSuggestionListItemElement } from './style'

export const AddressSuggestionListItem = ({ value, onClick }) => (
  <AddressSuggestionListItemElement data-testid="autocompleteListItem" onClick={onClick}>
    {value}
  </AddressSuggestionListItemElement>
);
