import { InitialState } from './../../types/auth'
import { AuthActions } from '../../types/auth'
import { AuthActionTypes } from './auth.types'

const initialState: InitialState = {
  isOpened: false,
  user: null,
  users: [
    {
      id: 1,
      user_name: 'vozduh',
      pass_word: '12345',
      photo: null,
      name: null,
      second_name: null,
      sex: null,
      birthday: null,
    },
  ],
}

export const enum NavActionTypes {
  CHANGE_CHAPTER = 'CHANGE_CHAPTER',
}

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN:
      return { ...state, user: action.payload }
    case AuthActionTypes.LOG_OUT:
      return { ...state, user: null }
    case AuthActionTypes.SET_OPEN_ON:
      return { ...state, isOpened: true }
    case AuthActionTypes.SET_OPEN_OFF:
      return { ...state, isOpened: false }
    case AuthActionTypes.SIGN_UP:
      return { ...state, users: state.users }
    default:
      return state
  }
}
