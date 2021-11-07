import { User } from './../../../types/auth'

export const loginAttempt = (
  users: User[],
  username: string,
  password: string
): null | number => {
  let id: null | number = null
  users.forEach((user) => {
    if (user.user_name === username && user.pass_word === password) {
      id = user.id
    }
  })
  return id
}
