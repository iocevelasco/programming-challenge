import React from 'react'
import { HeroButton, HeroImg, HeroInfo, HeroTitle, HeroWrapper } from './Hero.style'

export type HeroProps = {
  title: string
  textButton: string
  background: string
}

export default function Hero({ title, textButton, background }: HeroProps) {
  return (
    <HeroWrapper>
      <HeroImg src={background} />
      <HeroInfo>
        <HeroTitle>{title}</HeroTitle>
        <HeroButton whileTap={{ scale: 0.95 }}>{textButton}</HeroButton>
      </HeroInfo>
    </HeroWrapper>
  )
}
