import React from 'react'
import { LoaderElement } from './style'

export const Loader = ({ message }) => {
  return (
    <LoaderElement
      role="dialog"
      aria-labelledby={message}
      aria-modal="true"
    >{message}</LoaderElement>
  )
}
