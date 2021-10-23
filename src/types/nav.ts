import { NavActionTypes } from '../redux/nav/nav.types'

export enum Directions {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum Chapters {
  MAIN = 'MAIN',
  BOOK = 'BOOK',
  TAP = 'TAP',
  INFO = 'INFO',
}

export interface NavState {
  chapter: Chapters
}

export interface ChangeChapter {
  type: NavActionTypes.CHANGE_CHAPTER
  payload: Chapters
}

export type NavAction = ChangeChapter
