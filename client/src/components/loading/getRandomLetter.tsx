import { notCapitals } from '../book-redone/components/strings/strings'

export const getRandomLetter = (used: string): string => {
  let array = notCapitals.filter((el) => !used.includes(el))
  return array[Math.floor(Math.random() * array.length)]
}
