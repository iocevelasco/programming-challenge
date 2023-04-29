export type PotionsType = string[]
export type CombinationType = PotionsType[][]
export type DamageType = { [key: string]: number }

export enum WitchGameMessages {
  InputLabel = 'Select potions',
  ButtonLabelReset = 'Reset Attacks',
  ButtonLabelAttack = 'Attacks',
}

export const potionsCollections: PotionsType = ['red', 'blue', 'green', 'yellow', 'gray']

export const getAllCombinations = (combinationsCollections: PotionsType): CombinationType => {
  if (combinationsCollections.length === 0) {
    return [[]]
  }

  return getAllCombinations(combinationsCollections.slice(1)).flatMap((combination: any) => [
    [combinationsCollections[0], ...combination],
    combination,
  ])
}

export const filterCombinations = (combinations: CombinationType) => {
  const newCombinations = combinations.filter((c) => new Set(c.map((p) => p[0])).size === c.length)
  return newCombinations
}

export const calculateDamage = (combination: PotionsType) => {
  const damageByPotions: DamageType = {
    1: 0.03,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  }

  const numPotions = combination.length

  return damageByPotions[numPotions] || 0
}

export const sortByDamage = (
  a: {
    combination: PotionsType[]
    damage: number
  },
  b: {
    combination: PotionsType[]
    damage: number
  }
) => {
  return b.damage - a.damage
}

export const mappedDamage = (values: { combination: PotionsType[]; damage: number }) => {
  return `Using ${values.combination.length} the best attack is %${values.damage * 100}`
}

export const mappedPotions = (potionsSelected: string[]) => {
  const calculatePotions = potionsSelected.reduce((acc, item) => {
    return {
      ...acc,
      [item]: acc[item] ? acc[item] + 1 : 1,
    }
  }, {} as { [key: string]: number })

  return Object.keys(calculatePotions).map((potion) => ({
    label: ` ${potion} ${calculatePotions[potion]}`,
  }))
}
