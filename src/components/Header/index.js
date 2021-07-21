import React from 'react'
import { CgShoppingBag } from 'react-icons/cg'
import { Address, HeaderElement, LogoImage, Nav, SignInButton, ShopBasketButton } from './style'
import BrewliveryLogo from '../../assets/brewlivery.svg'

export const Header = ({ address = null }) => {
  return ( 
    <HeaderElement>
      <Nav>
        <LogoImage src={BrewliveryLogo} alt="Logotipo Brewlivery" />
        { address ? <Address>{address}</Address> : <span></span>}
        <SignInButton>Login</SignInButton>
        <ShopBasketButton aria-label="Ir para a sacola de compras">
          <CgShoppingBag />
        </ShopBasketButton>
      </Nav>
    </HeaderElement>
  )
}
