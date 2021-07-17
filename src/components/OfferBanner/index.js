import React from 'react'
import { OfferBannerElement } from './style'
import BannerImage from '../../assets/pngfind.com-cerveja-png-5703694.png'

export const OfferBanner = () => {
  return (
    <OfferBannerElement>
      <img src={BannerImage} alt="" />
    </OfferBannerElement>
  )
}
