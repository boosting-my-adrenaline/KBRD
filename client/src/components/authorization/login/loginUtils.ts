import { User } from './../../../types/auth'

export const loginAttempt = (
  users: User[],
  username: string,
  password: string
): null | User => {
  let USER: null | User = null
  users.forEach((user) => {
    if (user.user_name === username && user.pass_word === password) {
      USER = user
    }
  })
  return USER
}
