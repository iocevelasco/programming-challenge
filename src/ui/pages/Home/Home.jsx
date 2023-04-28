import React from 'react'
import ActivitiesSection from './ActivitiesSection'
import { LadingPageWrapper } from './Home.style'
import Hero from 'ui/components/Hero'
import LayoutLadingSection from 'ui/Layouts/LayoutLadingSection'
import { HomeMessage } from './Home.utils'

export default function LadingPage() {
  return (
    <LadingPageWrapper>
      <Hero
        title={HomeMessage.HeroTitle}
        textButton={HomeMessage.HeroButtonText}
        background={HomeMessage.HeroBackground}
      />
      <LayoutLadingSection title={HomeMessage.TitleActivitiesSection}>
        <ActivitiesSection />
      </LayoutLadingSection>
    </LadingPageWrapper>
  )
}
