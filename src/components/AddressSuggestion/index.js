import React, { useRef } from 'react'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'
import { AddressSuggestionsList } from './AddressSuggestionList'
import { AddressSuggestionElement } from './style'

export const AddressSuggestion = ({
  name,
  label,
  value,
  id,
  placeholder,
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
        
        if (typeof details !== 'string') {
          const geoData = {
            fullAddress: details.formatted_address,
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
    <AddressSuggestionElement>
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
      {status === 'OK' && <AddressSuggestionsList suggestions={data} onSuggestionClick={handleSuggestionClick} />}
  </AddressSuggestionElement>
  )
}
