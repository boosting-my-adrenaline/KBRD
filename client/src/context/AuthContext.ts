import { createContext } from 'react'

interface IProps {
  token: null | string
  userId: null | string
  email: null | string
  login: (jwtToken: string, id: string, username: string) => void
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<IProps>({
  token: null,
  userId: null,
  email: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})
