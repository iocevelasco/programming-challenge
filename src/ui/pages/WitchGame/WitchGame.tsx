import React, { useState } from 'react'
import { LayoutWrapperStyled, InputWrapperStyled, WrapperChipsStyled } from './WitchGame.style'
import { Box, InputLabel, MenuItem, FormControl, Chip } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { getAllCombinations, potionsCollections, WitchGameMessages } from './WitchGame.util'

export default function WitchGame() {
  const [potionsSelected, setPotionsSelected] = useState<string[]>([])
  const [fieldValue, setFieldValue] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setFieldValue(value)
    setPotionsSelected((prevValue) => [...prevValue, value])
  }

  const handleDelete = (potion: number) => {
    const newPotionList = potionsSelected.filter((item, index) => index !== potion)
    setPotionsSelected(newPotionList)
  }

  const disableInput = potionsSelected.length === 5

  return (
    <LayoutWrapperStyled>
      <InputWrapperStyled>
        <FormControl fullWidth>
          <InputLabel id={WitchGameMessages.inputLabelId}>
            {WitchGameMessages.inputLabel}
          </InputLabel>
          <Select
            disabled={disableInput}
            labelId={WitchGameMessages.inputLabelId}
            label={WitchGameMessages.inputLabel}
            onChange={handleChange}
            value={fieldValue}
          >
            {potionsCollections.map((collection) => (
              <MenuItem key={collection} value={collection}>
                {collection}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <WrapperChipsStyled>
          {potionsSelected.map((potion, index) => (
            <Chip key={index} label={potion} onDelete={() => handleDelete(index)} />
          ))}
        </WrapperChipsStyled>
      </InputWrapperStyled>
    </LayoutWrapperStyled>
  )
}
