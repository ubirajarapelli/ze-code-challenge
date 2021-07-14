import React, { useRef } from 'react'
import usePlacesAutocomplete, { getDetails } from "use-places-autocomplete";

const ListItem = ({ value, onClick }) => (
  <li data-testid="autocompleteListItem" onClick={onClick}>
    {value}
  </li>
);

const SuggestionsList = ({ suggestions, onSuggestionClick }) => {
  if (suggestions) {
    return (
      <>
        <ul data-testid="autocompleteList">
          {suggestions.map((suggestion) => (
            <ListItem
              key={suggestion.place_id}
              value={suggestion.description}
              onClick={() => onSuggestionClick(suggestion)}
            />
          ))}
        </ul>
      </>
    );
  }

  return <></>;
};


export const AddressSuggestion = ({
  name,
  label,
  value,
  id,
  placeholder,
  error,
  handleChange,
  handleBlur
}) => {
  const autoCompleteRef = useRef(null)

  const {
    value: query, 
    suggestions: { status, data },
    setValue: setQuery,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['address'],
      componentRestrictions: {
        country: 'br',
      },
    },
    debounce: 300,
    defaultValue: value,
  });

  const handleInputChange = (event) => {
    setQuery(event.currentTarget.value);
  };

  const handleSuggestionClick = ({ place_id: placeId }) => {
    const parameter = {
      placeId,
    };

    getDetails(parameter)
      .then((details) => {
        console.log('log', details);
        
        if (typeof details !== 'string') {

          const geoData = {
            formattedAddress: details.formatted_address,
            lat: String(details.geometry.location.lat()),
            long: String(details.geometry.location.lng())
          }
          setQuery(details.name, false)
          handleChange(geoData);
        }

      })
      .catch((error) => {
        console.log('😱 Error: ', error);
      })
      .finally(() => clearSuggestions());
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        ref={autoCompleteRef}
        name={name}
        id={id}
        type="text"
        placeholder={placeholder}
        value={query} 
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
      {status === 'OK' && <SuggestionsList suggestions={data} onSuggestionClick={handleSuggestionClick} />}
  </>
  )
}