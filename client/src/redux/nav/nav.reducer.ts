import { NavActionTypes } from './nav.types'
import { Chapters, NavState, NavAction } from '../../types/nav'

const initialState: NavState = {
  chapter: Chapters.MAIN,
  isLoading: false,
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

    default:
      return state
  }
}
