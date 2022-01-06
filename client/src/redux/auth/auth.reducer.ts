import { newItemId } from './../../utils/modifier'
import { State } from './../../types/auth'
import { AuthActions } from '../../types/auth'
import { AuthActionTypes } from './auth.types'
import { addNewItem } from '../../utils/modifier'

const initialState: State = {
  isOpened: false,
  user: {
    user_name: `guest`,
    book: {
      level: 0,
      exp: 0,
    },
  },
  remembered: null,
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
      book: {
        level: 5,
        exp: 500,
      },
    },
    {
      id: 2,
      user_name: 'test',
      pass_word: '12345',
      photo: null,
      name: null,
      second_name: null,
      sex: null,
      birthday: null,
      book: {
        level: 0,
        exp: 0,
      },
    },
  ],
}

export const enum NavActionTypes {
  CHANGE_CHAPTER = 'CHANGE_CHAPTER',
}

export const authReducer = (
  state = initialState,
  action: AuthActions
): State => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN:
      return {
        ...state,
        user: action.payload.user,
        remembered: action.payload.rememeber ? action.payload.user : null,
      }
    case AuthActionTypes.LOG_OUT:
      return {
        ...state,
        user: { user_name: `guest`, book: { exp: 0, level: 0 } },
      }
    case AuthActionTypes.SET_OPEN_ON:
      return { ...state, isOpened: true }
    case AuthActionTypes.SET_OPEN_OFF:
      return { ...state, isOpened: false }
    case AuthActionTypes.SIGN_UP:
      let newUser = {
        id: newItemId(state.users),
        user_name: action.payload.username,
        pass_word: action.payload.password,
        photo: null,
        name: null,
        second_name: null,
        sex: null,
        birthday: null,
        book: {
          level: 0,
          exp: 0,
        },
      }
      return {
        ...state,
        users: addNewItem(state.users, newUser),
        user: newUser,
      }
    case AuthActionTypes.CHANGE_EXP:
      return {
        ...state,
        user: {
          ...state.user,
          book: {
            ...state.user.book,
            exp: action.payload,
          },
        },
      }

    case AuthActionTypes.CHANGE_LVL:
      return {
        ...state,
        user: {
          ...state.user,
          book: {
            ...state.user.book,
            level: action.payload,
          },
        },
      }

    default:
      return state
  }
}
