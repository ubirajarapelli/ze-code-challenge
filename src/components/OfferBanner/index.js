import React from 'react'
import { OfferBannerElement, OfferBannerCaption } from './style'
import BannerImage from '../../assets/pngfind.com-cerveja-png-5703694.png'

export const OfferBanner = () => {
  return (
    <OfferBannerElement>
      <figure>
        <img src={BannerImage} alt="Cerveja Tupiniquin" />
        <OfferBannerCaption><strong>Microcervejarias especiais</strong><br /> com até 50% OFF</OfferBannerCaption>
      </figure>
    </OfferBannerElement>
  )
}
