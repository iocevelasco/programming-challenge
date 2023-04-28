export type potionsType = string[]
export type combinationType = potionsType[][]
export type damageType = { [key: string]: number }

export enum WitchGameMessages {
  inputLabel = 'Select potions',
  inputLabelId = 'potion-selector-field',
}

export const potionsCollections: potionsType = ['red', 'blue', 'green', 'yellow', 'gray']

export const calculateDamage = (combination: potionsType) => {
  const damageByPotions: damageType = {
    1: 0.03,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  }

  const numPotions = combination.length
  return damageByPotions[numPotions] || 0
}
