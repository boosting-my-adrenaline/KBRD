import { NavActionTypes } from './nav.types'
import { Chapters, NavAction } from '../../types/nav'

export const changeChapter = (chapter: Chapters): NavAction => ({
  type: NavActionTypes.CHANGE_CHAPTER,
  payload: chapter,
})
