import { Chapters } from './../../types/nav'
export const enum NavActionTypes {
  CHANGE_CHAPTER = 'CHANGE_CHAPTER',
}

export const chapters: Chapters[] = [Chapters.BOOK, Chapters.TAP, Chapters.INFO]
