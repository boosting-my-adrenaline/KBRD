import { AuthActionTypes } from '../redux/auth/auth.types'

export interface User {
  id: number
  user_name: string
  pass_word: string
  photo: null | string
  name: null | string
  second_name: null | string
  sex: null | 'male' | 'female' | `don't identify`
  birthday: null | string
}

export interface InitialState {
  isOpened: boolean
  user: null | User
  remembered: null | User
  users: User[]
}

export interface LogIn {
  type: AuthActionTypes.LOG_IN
  payload: { user: User; rememeber: boolean }
}

export interface LogOut {
  type: AuthActionTypes.LOG_OUT
}

export interface SetOpenOn {
  type: AuthActionTypes.SET_OPEN_ON
}

export interface SetOpenOff {
  type: AuthActionTypes.SET_OPEN_OFF
}

export interface SignUp {
  type: AuthActionTypes.SIGN_UP
  payload: { username: string; password: string }
}

export type AuthActions = LogIn | LogOut | SetOpenOn | SetOpenOff | SignUp
