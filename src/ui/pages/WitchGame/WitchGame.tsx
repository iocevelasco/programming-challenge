import React, { useState } from 'react'
import { LayoutWrapperStyled, WrapperChipsStyled, ChipStyled } from './WitchGame.style'
import { InputLabel } from '@mui/material'
import { potionsCollections, WitchGameMessages, calculateDamage } from './WitchGame.util'

export default function WitchGame() {
  const [potionsSelected, setPotionsSelected] = useState<string[]>([])

  const handleAddPotion = (newPotion: string) => {
    setPotionsSelected((prevValue) => [...prevValue, newPotion])
  }

  const handleDelete = (potion: number) => {
    const newPotionList = potionsSelected.filter((item, index) => index !== potion)
    setPotionsSelected(newPotionList)
  }

  const damageByCombination = calculateDamage(potionsSelected)

  return (
    <LayoutWrapperStyled>
      <InputLabel> {WitchGameMessages.inputLabel}</InputLabel>
      <WrapperChipsStyled marginBottom={2}>
        {potionsCollections.map((potion, index) => (
          <ChipStyled key={index} label={potion} onClick={() => handleAddPotion(potion)} />
        ))}
      </WrapperChipsStyled>
      <WrapperChipsStyled marginBottom={2}>
        {potionsSelected.map((potion, index) => (
          <ChipStyled key={index} label={potion} onDelete={() => handleDelete(index)} />
        ))}
      </WrapperChipsStyled>
      <pre>{JSON.stringify(damageByCombination, null, 2)}</pre>
    </LayoutWrapperStyled>
  )
}
