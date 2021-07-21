import React from 'react'
import { AddressSuggestionListItem } from './AddressSuggestionListIten'
import { AddressSuggestionListElement } from './style'

export const AddressSuggestionsList = ({ suggestions, onSuggestionClick }) => {
  if (suggestions) {
    return (
      <AddressSuggestionListElement data-testid="autocompleteList">
        {suggestions.map((suggestion) => (
          <AddressSuggestionListItem
            key={suggestion.place_id}
            value={suggestion.description}
            onClick={() => onSuggestionClick(suggestion)}
          />
        ))}
      </AddressSuggestionListElement>
    );
  }

  return <></>;
};
