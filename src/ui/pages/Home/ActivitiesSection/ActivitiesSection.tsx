import React from 'react'
import {
  ActivityCard,
  SectionWrapper,
  StyledTitle,
  StyledDescription,
  StyledOverlay,
} from './ActivitiesSection.style'
import { activitiesCollection } from './ActivitiesSection.utils'
import { Grid } from '@mui/material'

export default function ActivitiesSection() {
  return (
    <SectionWrapper container>
      {activitiesCollection.map(({ title, img, description, columns }) => (
        <Grid key={title} item xs={columns}>
          <ActivityCard $cardImage={img}>
            <StyledTitle variant="h2">{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledOverlay />
          </ActivityCard>
        </Grid>
      ))}
    </SectionWrapper>
  )
}
