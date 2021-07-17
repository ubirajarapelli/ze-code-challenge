import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SocialLinksElement } from './style'

export const SocialLinks = () => {

  const socialItems = [
    {
      link: '/facebook.com/brewlivery',
      label: "Link para a Brewlivery no Facebook",
      icon: <FaFacebookF />
    },
    {
      link: '/instagam.com/brewlivery',
      label: "Link para a Brewlivery no Instagam",
      icon: <FaInstagram />
    },
    {
      link: '/twitter.com/brewlivery',
      label: "Link para a Brewlivery no Twitter",
      icon: <FaTwitter />
    },
  ]

  return (
    <SocialLinksElement>
      {socialItems.map(({ link, label, icon }) => (
        <li key={link}>
          <a href={link} aria-label={label}>
            {icon}
          </a>
        </li>
      ))}
    </SocialLinksElement>
        
  )
}
