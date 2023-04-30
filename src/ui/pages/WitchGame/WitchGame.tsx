import React, { useState } from 'react'
import { LayoutWrapperStyled, WrapperChipsStyled, ChipStyled } from './WitchGame.style'
import { Button, Grid, InputLabel } from '@mui/material'
import RenderAttack from './components/RenderAttack'
import {
  potionsCollections,
  WitchGameMessages,
  mappedPotions,
  findOptimalAttacks,
  type Potion,
  type Attack,
  type PotionQuantities,
} from './WitchGame.util'

export default function WitchGame() {
  const [potionsSelected, setPotionsSelected] = useState<Potion>([])
  const [attackList, setAttackList] = useState<Attack[]>([])
  const handleResetAttack = () => {
    setAttackList([])
    setPotionsSelected([])
  }

  const handleAddPotion = (newPotion: string) =>
    setPotionsSelected((prevValue) => [...prevValue, newPotion])

  const handleDelete = (potion: number) => {
    const newPotionList = potionsSelected.filter((item, index) => index !== potion)
    setPotionsSelected(newPotionList)
  }

  const handlerAttack = () => {
    const witcherPotions = potionsSelected.map((potion) => ({ color: potion }))
    const optimalAttacks = findOptimalAttacks(witcherPotions)
    const mostEffectiveAttack = optimalAttacks[0]

    const usedPotions: PotionQuantities = potionsSelected.reduce((acc, item) => {
      return {
        ...acc,
        [item]: mostEffectiveAttack.potionQuantities[item] - 1,
      }
    }, {})

    for (let key in usedPotions) {
      if (usedPotions[key] === 0) {
        delete usedPotions[key]
      }
    }

    const attackListCombination = [...attackList, mostEffectiveAttack].sort(
      (a, b) => a.damage - b.damage
    )
    setPotionsSelected(Object.keys(usedPotions))
    setAttackList(attackListCombination)
  }

  const mappedPotionsSelected = mappedPotions(potionsSelected)

  return (
    <LayoutWrapperStyled>
      <InputLabel> {WitchGameMessages.InputLabel}</InputLabel>
      <WrapperChipsStyled marginBottom={2}>
        {potionsCollections.map((potion, index) => (
          <ChipStyled key={index} label={potion} onClick={() => handleAddPotion(potion)} />
        ))}
      </WrapperChipsStyled>
      <WrapperChipsStyled marginBottom={2}>
        {mappedPotionsSelected.map(({ label }, index) => (
          <ChipStyled key={index} label={label} onDelete={() => handleDelete(index)} />
        ))}
      </WrapperChipsStyled>
      <Grid container mt={3}>
        <Grid item>
          <Button onClick={handlerAttack} variant="contained" disabled={!potionsSelected.length}>
            {WitchGameMessages.ButtonLabelAttack}
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleResetAttack}>{WitchGameMessages.ButtonLabelReset}</Button>
        </Grid>
      </Grid>
      <RenderAttack attackCollection={attackList} />
    </LayoutWrapperStyled>
  )
}
