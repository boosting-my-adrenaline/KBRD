import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [email, setEmail] = useState(null)

  const login = useCallback((jwtToken, id, em) => {
    setToken(jwtToken)
    setUserId(id)
    setEmail(em)

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
        email: em,
      })
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setEmail(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) as string)

    if (data && data.token) {
      login(data.token, data.userId, data.email)
    }
    setReady(true)
  }, [login])

  return { login, logout, token, userId, ready, email }
}
