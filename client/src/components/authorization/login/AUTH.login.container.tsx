import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useHttp } from '../../../hooks/http.hook'
import { useAuthAction } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { AUTHlogin } from './AUTH.login'
import { loginAttempt } from './loginUtils'

interface IProps {}

export const AUTHloginContainer: React.FC<IProps> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)

  const [success, setSuccess] = useState(false)

  const [rememberMe, setRememberMe] = useState(true)

  const users = useTypedSelector((state) => state.auth.users)
  const { setOpenOff } = useAuthAction()

  const { loading, request, error: hookError, clearError } = useHttp()

  useDidMountEffect(() => {
    handleIncorrectUsernameOrPassword()
  }, [hookError])

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

      setSuccess(true)

      setTimeout(() => {
        auth.login(data.token, data.userId, username)
        setUsername('')
        setPassword('')
        setOpenOff()
        setSuccess(false)
      }, 500)
    } catch {
      handleIncorrectUsernameOrPassword()
    }

    // setUsername('')
    // setPassword('')
    // setOpenOff()
    // return
    // }
    // handleIncorrectUsernameOrPassword()
    // }, 0)
  }

  const handleIncorrectUsernameOrPassword = (): void => {
    setTimeout(() => {
      setError(true)
    }, 300)

    setTimeout(() => {
      setError(false)
    }, 1500)
  }

  return (
    <>
      <AUTHlogin
        username={username}
        setUsername={setUsername}
        setPassword={setPassword}
        password={password}
        error={error}
        success={success}
        rememberMe={rememberMe}
        setRememberMe={setRememberMe}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
