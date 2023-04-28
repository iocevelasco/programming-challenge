import React from 'react'
import type { ReactNode } from 'react'
import { SectionWrapper } from './LayoutLadingSection.style'
import { Typography } from '@mui/material'
import { appColors } from 'utils/colors'

export type LayoutLadingSectionProps = {
  title: string
  children: ReactNode | JSX.Element | JSX.Element[]
}

export default function LayoutLadingSection({ children, title }: LayoutLadingSectionProps) {
  return (
    <SectionWrapper>
      <Typography variant="h2" fontSize="3rem" fontWeight="300" color={appColors.white}>
        {title}
      </Typography>
      {children}
    </SectionWrapper>
  )
}
