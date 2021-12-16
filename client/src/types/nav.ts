import { NavActionTypes } from '../redux/nav/nav.types'

export enum Directions {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum Chapters {
  AUTH = 'AUTH',
  MAIN = 'MAIN',
  BOOK = 'BOOK',
  TAP = 'TAP',
  INFO = 'INFO',
  NOT_FOUND = 'NOTFOUND',
}

export interface NavState {
  chapter: Chapters
  isLoading: boolean
}

export interface ChangeChapter {
  type: NavActionTypes.CHANGE_CHAPTER
  payload: Chapters
}

export interface SetLoadingOn {
  type: NavActionTypes.SET_LOADING_ON
}

export interface SetLoadingOff {
  type: NavActionTypes.SET_LOADING_OFF
}

export type NavAction = ChangeChapter | SetLoadingOn | SetLoadingOff
