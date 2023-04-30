export type Potion = string[]
export type PotionCombination = PotionColor[][]
export type PotionQuantities = {
  [key: string]: number
}
export type Attack = {
  potionQuantities: PotionQuantities
  damage: number
}
export type PotionColor = {
  color: string
}

export enum WitchGameMessages {
  InputLabel = 'Select potions',
  ButtonLabelReset = 'Reset Attacks',
  ButtonLabelAttack = 'Attacks',
}

export const potionsCollections: Potion = ['red', 'blue', 'green', 'yellow', 'gray']

export const combinations = (potions: PotionColor[], n: number) => {
  if (n === 1) {
    return potions.map((item) => [item])
  }
  const comb: PotionCombination = []
  for (let i = 0; i <= potions.length - n; i++) {
    const head = potions.slice(i, i + 1)
    const tailCombs = combinations(potions.slice(i + 1), n - 1)
    tailCombs.forEach((tail) => comb.push(head.concat(tail)))
  }

  return comb
}

function calculateDamage(potionCombination: PotionColor[]): number {
  const uniqueColors = new Set<string>()
  for (const potion of potionCombination) {
    uniqueColors.add(potion.color)
  }
  const numPotions = uniqueColors.size
  switch (numPotions) {
    case 1:
      return 3
    case 2:
      return 5
    case 3:
      return 10
    case 4:
      return 20
    default:
      return 25
  }
}

export const findOptimalAttacks = (potions: PotionColor[]): Attack[] => {
  const potionCombinations: PotionColor[][] = []

  for (let i = 1; i <= potions.length; i++) {
    const combos = combinations(potions, i)
    console.log({ combos })
    potionCombinations.push(...Array.from(combos))
  }

  const damageMap = new Map<string, number>()
  potionCombinations.forEach((comb) => {
    const damage = calculateDamage(comb)
    const key = comb
      .map((p) => p.color)
      .sort()
      .join(',')
    if (!damageMap.has(key) || damage) {
      damageMap.set(key, damage)
    }
  })
  const attacks: Attack[] = []
  damageMap.forEach((damage, colors) => {
    const potionColors = colors.split(',')
    const potionQuantities: PotionQuantities = {}
    potionColors.forEach((color) => {
      potionQuantities[color] = potions.filter((p) => p.color === color).length
    })
    const attack = { potionQuantities, damage }
    attacks.push(attack)
  })
  attacks.sort((a, b) => b.damage - a.damage)
  return attacks
}

export const mappedPotions = (potionsSelected: Potion) => {
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
