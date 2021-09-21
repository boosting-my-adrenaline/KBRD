import { NavActionTypes } from './nav.types'
import { Chapters, NavState, NavAction } from '../../types/nav'

const initialState: NavState = {
  chapter: Chapters.BOOK,
}

export const navReducer = (
  state = initialState,
  action: NavAction
): NavState => {
  switch (action.type) {
    case NavActionTypes.CHANGE_CHAPTER:
      return {
        ...state,
        chapter: action.payload,
      }
    default:
      return state
  }
}
