import React from 'react'
import { CgShoppingBag } from 'react-icons/cg'
import { HeaderElement, Address, SignInButton, ShopBasketButton } from './style'
import BrewliveryLogo from '../../assets/brewlivery.svg'

export const Header = ({ address = null }) => {
  return ( 
    <HeaderElement>
      <nav>
        <img src={BrewliveryLogo} alt="Logotipo Brewlivery" />
        <Address>{address}</Address>
        <SignInButton>Login</SignInButton>
        <ShopBasketButton aria-label="Ir para a sacola de compras">
          <CgShoppingBag />
        </ShopBasketButton>
      </nav>
    </HeaderElement>
  )
}
