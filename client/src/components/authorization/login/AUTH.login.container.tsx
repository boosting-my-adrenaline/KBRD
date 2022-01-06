import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useHttp } from '../../../hooks/http.hook'
import { useAuthAction } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { AUTHlogin } from './AUTH.login'
import { loginAttempt } from './loginUtils'

interface IProps {}

export const AUTHloginContainer: React.FC<IProps> = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [usernameError, setUsernameError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const [rememberMe, setRememberMe] = useState(true)

  const users = useTypedSelector((state) => state.auth.users)
  const { setOpenOff } = useAuthAction()

  const { loading, request, error, clearError } = useHttp()

  const auth = useContext(AuthContext)

  const handleSubmit = async () => {
    const response = loginAttempt(users, username, password)
    // console.log(users)
    // console.log(username)
    // console.log(password)
    // console.log(response)
    // setTimeout(() => {
    // if (response) {
    // logIn(response, rememberMe)
    try {
      const data = await request('/api/auth/login/', 'POST', {
        email: username,
        password,
      })

      auth.login(data.token, data.userId)
    } catch {
      handleIncorrectUsernameOrPassword()
    }

    // setUsername('')
    // setPassword('')
    // setOpenOff()
    // return
    // }
    handleIncorrectUsernameOrPassword()
    // }, 0)
  }

  const handleIncorrectUsernameOrPassword = (): void => {
    setTimeout(() => {
      setUsernameError(true)
      setPasswordError(true)
    }, 300)

    setTimeout(() => {
      setUsernameError(false)
      setPasswordError(false)
    }, 1500)
  }

  return (
    <>
      <AUTHlogin
        username={username}
        setUsername={setUsername}
        setPassword={setPassword}
        password={password}
        usernameError={usernameError}
        passwordError={passwordError}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
