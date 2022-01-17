import { Chapters } from './../../types/nav'
export const enum NavActionTypes {
  CHANGE_CHAPTER = 'CHANGE_CHAPTER',
  SET_LOADING_ON = 'SET_LOADING_ON',
  SET_LOADING_OFF = 'SET_LOADING_OFF',
  SET_INSTANT_ON = 'SET_INSTANT_ON',
  SET_INSTANT_OFF = 'SET_INSTANT_OFF',
}

export const chapters: Chapters[] = [Chapters.BOOK, Chapters.TAP, Chapters.INFO]
