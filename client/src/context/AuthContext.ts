import { createContext } from 'react'

interface IProps {
  token: null | string
  userId: null | string
  login: (jwtToken: string, id: string) => void
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<IProps>({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})
