import React, { useState } from 'react'
import { LayoutWrapperStyled, WrapperChipsStyled, ChipStyled } from './WitchGame.style'
import { Button, Grid, InputLabel, Typography } from '@mui/material'
import {
  getAllCombinations,
  potionsCollections,
  WitchGameMessages,
  filterCombinations,
  calculateDamage,
  sortByDamage,
  mappedDamage,
  mappedPotions,
} from './WitchGame.util'

export default function WitchGame() {
  const [potionsSelected, setPotionsSelected] = useState<string[]>([])
  const [attackList, setAttackList] = useState<string[]>([])
  const handleResetAttack = () => setPotionsSelected([])

  const handleAddPotion = (newPotion: string) =>
    setPotionsSelected((prevValue) => [...prevValue, newPotion])

  const handleDelete = (potion: number) => {
    const newPotionList = potionsSelected.filter((item, index) => index !== potion)
    setPotionsSelected(newPotionList)
  }

  const handlerAttack = () => {
    const allCombinations = getAllCombinations(potionsSelected)

    const validCombinations = filterCombinations(allCombinations)

    const damageByCombination = validCombinations.map((c) => ({
      combination: c,
      damage: calculateDamage(c),
    }))

    const attackList = damageByCombination.sort(sortByDamage).reduce((acc, item) => {
      return {
        ...acc,
        [item.combination.length]: item,
      }
    }, {} as { [key: string]: number })
    setAttackList(attackList)
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
      <Grid container>
        <Grid item>
          <Button onClick={handlerAttack} variant="contained" disabled={!potionsSelected.length}>
            {WitchGameMessages.ButtonLabelAttack}
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleResetAttack}>{WitchGameMessages.ButtonLabelAttack}</Button>
        </Grid>
      </Grid>
      {Object.keys(attackList).map((attack, index) => (
        <Typography key={index}>{mappedDamage(attackList[attack])}</Typography>
      ))}
    </LayoutWrapperStyled>
  )
}
