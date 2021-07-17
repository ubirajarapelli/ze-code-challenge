import React from 'react'
import { Footer, Header, OfferBanner, SocialLinks } from '../..'
import { HomeTemplateElement } from './style'

export const HomeTemplate = ({ children }) => {
  return (
    <>
      <Header />
        <HomeTemplateElement>
          <main>{children}</main>
          <section>
            <OfferBanner />
          </section>
          <aside>
            <SocialLinks />
          </aside>
        </HomeTemplateElement>
      <Footer />
    </>
  )
}
