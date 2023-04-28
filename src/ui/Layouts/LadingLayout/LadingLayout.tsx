import React from 'react'
import type { ReactNode } from 'react'
import { LandingLayoutWrapper } from './LadingLayout.style'
import Header from 'ui/components/Header/Header'
import Footer from 'ui/components/Footer/Footer'

export type LayoutProps = {
  children: ReactNode | JSX.Element | JSX.Element[]
}

export default function LandingLayout({ children }: LayoutProps) {
  return (
    <LandingLayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LandingLayoutWrapper>
  )
}
