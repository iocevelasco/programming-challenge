import React from 'react'
import { BenchCard, CardTitle, CardSubTitle, CardInfo, CardWeight } from './BenchmarksCardStyle'

export type BenchCardsProps = {
  title: string
  number: string
  subtitle: string
  info?: string
  weights?: string
}
const BenchCards = ({ title, number, subtitle, info, weights }: BenchCardsProps) => {
  return (
    <BenchCard>
      <CardTitle>{title} </CardTitle>
      <CardSubTitle>{subtitle} </CardSubTitle>
      {info && <CardInfo> {info} </CardInfo>}
      {weights && <CardWeight> {weights} </CardWeight>}
    </BenchCard>
  )
}

export default BenchCards
