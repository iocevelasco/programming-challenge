import React from 'react'
import { Grid, Typography } from '@mui/material'
import { DamageType } from 'ui/pages/WitchGame'

export type RenderAttackProps = {
  attackCollection: DamageType[]
}

export default function RenderAttack({ attackCollection }: RenderAttackProps) {
  if (!attackCollection.length) {
    return null
  }
  const totalDamage = attackCollection.reduce((acc, attack) => {
    return acc + attack.damage
  }, 0)

  const renderAttack = attackCollection.map(({ damage, potionQuantities }, index) => {
    const potions = Object.keys(potionQuantities).length
    return (
      <Typography key={index}>
        {`Attack ${index + 1}: using ${potions} different potions deal ${damage}% damage.`}
      </Typography>
    )
  })

  return (
    <Grid mt={2} gap={1} container>
      <Grid item>{renderAttack}</Grid>
      <Grid item>
        <Typography>{`Total: the warlock has dealt ${totalDamage}% damage. `}</Typography>
      </Grid>
    </Grid>
  )
}
