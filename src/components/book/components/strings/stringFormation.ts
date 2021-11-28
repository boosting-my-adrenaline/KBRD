import { getRandom } from './../../../../utils/getRandom'
import { s500 } from './strings'
import { shuffleArray } from '../../../../utils/shuffleArray'

export const shuffle = (STR: string): string => {
  let res: string = STR
  let fuse = 0
  while (res.slice(0, 20) === STR.slice(0, 20) && fuse < 20) {
    res =
      shuffleArray(STR.split('. '))
        .filter((el) => el)
        .join('. ') + '. '

    if (res[0] === ' ') {
      res = res.slice(1)
    }
    fuse++
  }

  return res
}

const arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '

export const removePunctuation = (STR: string, skip: number): string => {
  if (skip < 245) {
    return (
      STR.slice(0, skip) +
      STR.slice(skip, STR.length - skip)
        .split('')
        .filter((el) => arr.includes(el))
        .join('') +
      STR.slice(-skip)
    )
  } else {
    return (
      STR.slice(0, skip) +
      STR.slice(skip)
        .split('')
        .filter((el) => arr.includes(el))
        .join('')
    )
  }
}

export const lowerAll = (STR: string): string => {
  return STR.toLowerCase()
}

export const upperAll = (STR: string): string => {
  return STR.toUpperCase()
}

export const lowerAllWithSkip = (STR: string, skip: number): string => {
  if (skip < 245) {
    return (
      STR.slice(0, skip) +
      STR.slice(skip, STR.length - skip).toLowerCase() +
      STR.slice(-skip)
    )
  } else {
    return STR.slice(0, skip) + STR.slice(skip).toLowerCase()
  }
}

export const upperAllWithSkip = (STR: string, skip: number): string => {
  if (skip < 245) {
    return (
      STR.slice(0, skip) +
      STR.slice(skip, STR.length - skip).toUpperCase() +
      STR.slice(-skip)
    )
  } else {
    return STR.slice(0, skip) + STR.slice(skip).toUpperCase()
  }
}

export const moveString = (STR: string, skip: number): string => {
  return STR.slice(skip) + STR.slice(0, skip)
}

export const hackString = (): string => {
  const symbols =
    '!@#$%&*-+<>?/\\!@#$%&*-+<>?/\\!@#$%&*-+<>?/\\0123456789qwertyuiopasdfghjklzxcvbnm;:'.split(
      ''
    )
  const spaces = [' ', ' ', ' ', '  ', '   ']
  let STR = shuffle(s500)
    .split('')
    .map((el) => {
      if (el === ' ') {
        return spaces[Math.floor(Math.random() * spaces.length)]
      } else if (el === '.') {
        return '.'
      } else {
        return symbols[Math.floor(Math.random() * symbols.length - 1)]
      }
    })
    .join('')

  return shuffle(STR)
}
