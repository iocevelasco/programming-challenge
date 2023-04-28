export enum WitchGameMessages {
  inputLabel = 'Select potions',
  inputLabelId = 'potion-selector-field',
}

// Step 1: Create an array of all possible combinations of the potions
export const potionsCollections: string[] = ['red', 'blue', 'green', 'yellow', 'gray']

export const getAllCombinations = (combinationsCollections: string[]) => {
  if (combinationsCollections.length === 0) {
    return [[]]
  }

  return getAllCombinations(combinationsCollections.slice(1)).flatMap((combination: any) => [
    [combinationsCollections[0], ...combination],
    combination,
  ])
}

const allCombinations = getAllCombinations(potionsCollections)

export const filterCombinations = (combinations: string[]) => {
  const newCombinations = combinations.filter((c) => new Set(c.map((p) => p[0])).size === c.length)
  return newCombinations
}

const validCombinations = filterCombinations(allCombinations)

export const calculateDamage = (combination: string[]) => {
  const numPotions = combination.length

  const damage = {
    1: 0.03,
    2: 0.05,
    3: 0.01,
    4: 0.02,
    5: 0.25,
  } as { [key: string]: number }

  return damage[numPotions]
}

const damageByCombination = validCombinations.map((c) => ({
  combination: c,
  damage: calculateDamage(c),
}))

// Step 4: Sort the combinations by damage percentage in descending order
const sortByDamage = (a, b) => b.damage - a.damage
const sortedCombinations = damageByCombination.sort(sortByDamage)

// Select the combination(s) with the highest damage percentage
const highestDamage = sortedCombinations[0].damage
const bestAttacks = sortedCombinations.filter((c) => c.damage === highestDamage)

console.log(bestAttacks.map((c) => c.combination))
