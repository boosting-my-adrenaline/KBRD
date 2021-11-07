import { AuthActions } from '../../types/auth'
import { AuthActionTypes } from './auth.types'

export const logIn = (id: number): AuthActions => ({
  type: AuthActionTypes.LOG_IN,
  payload: id,
})

export const logOut = (): AuthActions => ({
  type: AuthActionTypes.LOG_OUT,
})

export const setOpenOn = (): AuthActions => ({
  type: AuthActionTypes.SET_OPEN_ON,
})

export const setOpenOff = (): AuthActions => ({
  type: AuthActionTypes.SET_OPEN_OFF,
})

export const signUp = (user: { username: string; password: string }) => ({
  type: AuthActionTypes.SIGN_UP,
  payload: user,
})
