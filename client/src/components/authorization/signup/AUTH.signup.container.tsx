import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useHttp } from '../../../hooks/http.hook'
import { useAuthAction, useNavAction } from '../../../hooks/useAction'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { PasswordState, UsernameState } from '../auth.types'
import { AUTHlsignup } from './AUTH.signup'
import { signupPasswordCheck, signUpUsernameCheck } from './signupUtils'

export const AUTHsignupContainer: React.FC = ({}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const [usernameMessage, setUsernameMessage] = useState<null | string>(null)
  const [passwordMessage, setPasswordMessage] = useState<null | string>(null)
  const [password2Message, setPassword2Message] = useState<null | string>(null)

  const [usernameState, setUsernameState] = useState<UsernameState>('default')
  const [passwordState, setPasswordState] = useState<PasswordState>('default')
  const [password2State, setPassword2State] = useState<UsernameState>('default')

  const [loading, setLoading] = useState(false)

  const { loading: loadingAuth, request, error, clearError } = useHttp()

  useEffect(() => {
    setLoading(loadingAuth)
  }, [loadingAuth])

  const { setLoadingOn, setLoadingOff } = useNavAction()

  // useDidMountEffect(() => {
  //   if (loading) {
  //     setLoadingOn()
  //   } else {
  //     setLoadingOff()
  //   }
  // }, [loading])

  useDidMountEffect(() => {
    if (error === 'TAKEN') {
      setUsernameState('error')
      setUsernameMessage('username is already taken')
    }
  }, [error])

  useDidMountEffect(() => {
    setUsernameState('default')
    setUsernameMessage('')

    let id0 = setTimeout(
      () => setUsernameState(signUpUsernameCheck(username)[0]),
      1000
    )
    let id1 = setTimeout(
      () => setUsernameMessage(signUpUsernameCheck(username)[1]),
      1000
    )

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
    }
  }, [username])

  useDidMountEffect(() => {
    setPasswordState('default')
    setPasswordMessage('')
    let id0 = setTimeout(
      () => setPasswordState(signupPasswordCheck(password)[0]),
      1000
    )
    let id1 = setTimeout(
      () => setPasswordMessage(signupPasswordCheck(password)[1]),
      1000
    )

    return () => {
      clearTimeout(id0)
      clearTimeout(id1)
    }
  }, [password])

  useDidMountEffect(() => {
    setPassword2State('default')
    setPassword2Message('')

    let id0 = setTimeout(() => {
      if (password === password2) {
        setPassword2State('success')
        setPassword2Message('')
      } else {
        setPassword2State('error')
        setPassword2Message('passwords do not match')
      }
    }, 1000)

    return () => {
      clearTimeout(id0)
    }
  }, [password2])

  const [noErrors, setNoErrors] = useState(true)

  useDidMountEffect(() => {
    if (
      usernameState === 'error' ||
      passwordState === 'error' ||
      password2State === 'error' ||
      // !username ||
      // !password ||
      !password2
    ) {
      setNoErrors(false)
    } else {
      setNoErrors(true)
    }
  }, [usernameState, passwordState, password2State])

  const { signUp, setOpenOff } = useAuthAction()
  const auth = useContext(AuthContext)

  const handleSumbit = async () => {
    if (!username) {
      setUsernameState(signUpUsernameCheck(username)[0])
      setUsernameMessage(signUpUsernameCheck(username)[1])
    }

    if (!password) {
      setPasswordState(signupPasswordCheck(password)[0])
      setPasswordMessage(signupPasswordCheck(password)[1])
    }

    if (!password2 || password2 !== password) {
      setPassword2State('error')
      setPassword2Message('passwords do not match')
    }

    if (!noErrors || !username || !password || !password2) return
    // setTimeout(() => setOpenOff(), 100)

    // setTimeout(() => signUp({ username, password }), 200)

    try {
      const data = await request('/api/auth/register/', 'POST', {
        email: username,
        password,
      })
      setTimeout(async () => {
        try {
          const data = await request('/api/auth/login/', 'POST', {
            email: username,
            password,
          })

          auth.login(data.token, data.userId, username)

          setTimeout(() => {
            setUsername('')
            setPassword('')
            setPassword2('')
            setUsernameState('default')
            setPasswordState('default')
            setPassword2State('default')
            setUsernameMessage('')
            setPasswordMessage('')
            setPassword2Message('')
          }, 50)
        } catch {
          setTimeout(() => setOpenOff(), 25)
        }
      }, 500)

      setTimeout(() => setOpenOff(), 25)
    } catch {
      setUsernameState(`error`)
      setPasswordState(`error`)
      setPassword2State(`error`)

      setUsernameMessage(`try again please`)
      setPasswordMessage(`try again please`)
      setPassword2Message(`try again please`)

      setTimeout(() => {
        setUsernameState('default')
        setPasswordState('default')
        setPassword2State('default')
        setUsernameMessage('')
        setPasswordMessage('')
        setPassword2Message('')
      }, 1550)
    }
  }

  return (
    <>
      <AUTHlsignup
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        password2={password2}
        setPassword2={setPassword2}
        usernameMessage={usernameMessage}
        passwordMessage={passwordMessage}
        password2Message={password2Message}
        usernameState={usernameState}
        passwordState={passwordState}
        password2State={password2State}
        noErrors={noErrors}
        handleSubmit={handleSumbit}
        isLoading={loading}
      />
    </>
  )
}
