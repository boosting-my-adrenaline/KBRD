import { PasswordState } from '../auth.types'
import { UsernameState } from '../auth.types'

const usernameAllowed =
  `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_`.split('')

export const signUpUsernameCheck = (
  username: string
): [status: UsernameState, message: string] => {
  if (!username.split('').every((el) => usernameAllowed.includes(el))) {
    return ['error', 'username must contain only a-z, A-Z, 0-9, _']
  } else if (
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_'].includes(
      username[0]
    )
  ) {
    return ['error', 'username must start with a letter']
  } else if (username.length <= 1) {
    return ['error', 'username must contain at least 2 characters']
  } else if (username.length > 25) {
    return ['error', 'username must contain 2-25 characters']
  } else if (username.split('').every((el) => '1234567890_'.includes(el))) {
    return ['error', 'username must contain a-z or A-Z']
  } else {
    return ['success', '']
  }
}

const passwordAllowed =
  `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_/!@#$%^&*`.split(
    ''
  )

const weaknessCheck = (password: string): boolean => {
  let arr = password.split('')
  if (!arr.some((el) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(el))) {
    return true
  } else if (!arr.some((el) => '-_/!@#$%^&*1234567890'.includes(el))) {
    return true
  }
  return false
}

export const signupPasswordCheck = (
  password: string
): [status: PasswordState, message: string] => {
  if (!password.split('').every((el) => passwordAllowed.includes(el))) {
    return ['error', 'only a-z, A-Z, 0-9, -_/!@#$%^&*']
  } else if (password.length <= 3) {
    return ['error', 'password must contain at least 4 characters']
  } else if (password.length > 30) {
    return ['error', 'password must contain 2-30 characters']
  } else if (1 > 2) {
    return ['error', 'this username is already taken']
  } else if (weaknessCheck(password)) {
    return ['warning', 'password is too weak']
  } else {
    return ['success', '']
  }
}
