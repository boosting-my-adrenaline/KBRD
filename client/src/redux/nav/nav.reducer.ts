import { NavActionTypes } from './nav.types'
import { Chapters, NavState, NavAction } from '../../types/nav'

const initialState: NavState = {
  chapter: Chapters.BOOK,
  isLoading: false,
  isInstant: false,
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
    case NavActionTypes.SET_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      }
    case NavActionTypes.SET_LOADING_OFF:
      return { ...state, isLoading: false }
    case NavActionTypes.SET_INSTANT_ON:
      return { ...state, isInstant: true }
    case NavActionTypes.SET_INSTANT_OFF:
      return { ...state, isInstant: false }
    default:
      return state
  }
}
