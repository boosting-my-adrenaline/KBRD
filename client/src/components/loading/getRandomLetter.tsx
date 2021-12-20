let notCapitals = 'abcdefghijklmnopqrstuvwxyz'.split('')

export const getRandomLetter = (used: string): string => {
  let array = notCapitals.filter((el) => !used.includes(el))
  return array[Math.floor(Math.random() * array.length)]
}
