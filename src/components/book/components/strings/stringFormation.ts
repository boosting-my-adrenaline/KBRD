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

export const moveString = (STR: string, skip: number): string => {
  return STR.slice(skip) + STR.slice(0, skip)
}
