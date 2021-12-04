import React, { useState } from 'react'
import { useHttp } from '../../../hooks/http.hook'
import { useAuthAction, useNavAction } from '../../../hooks/useAction'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { PasswordState, UsernameState } from '../auth.types'
import { AUTHlsignup } from './AUTH.signup'
import { signupPasswordCheck, signUpUsernameCheck } from './signupUtils'

export const AUTHsignupContainer: React.FC = ({}) => {
  const [username, setUsername] = useState('test1234')
  const [password, setPassword] = useState('1234')
  const [password2, setPassword2] = useState('1234')

  const [usernameMessage, setUsernameMessage] = useState<null | string>(null)
  const [passwordMessage, setPasswordMessage] = useState<null | string>(null)
  const [password2Message, setPassword2Message] = useState<null | string>(null)

  const [usernameState, setUsernameState] = useState<UsernameState>('default')
  const [passwordState, setPasswordState] = useState<PasswordState>('default')
  const [password2State, setPassword2State] = useState<UsernameState>('default')

  const { loading, request, error, clearError } = useHttp()

  const { setLoadingOn, setLoadingOff } = useNavAction()

  useDidMountEffect(() => {
    if (loading) {
      setLoadingOn()
    } else {
      setLoadingOff()
    }
  }, [loading])

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

  const handleSumbit = async () => {
    console.log('start')

    if (!username) {
      setUsernameState(signUpUsernameCheck(username)[0])
      setUsernameMessage(signUpUsernameCheck(username)[1])
    }
    console.log('1')

    if (!password) {
      setPasswordState(signupPasswordCheck(password)[0])
      setPasswordMessage(signupPasswordCheck(password)[1])
    }
    console.log('2')

    if (!password2 || password2 !== password) {
      setPassword2State('error')
      setPassword2Message('passwords do not match')
    }

    console.log('3')

    if (!noErrors || !username || !password || !password2)
      return console.log('something is wrong')
    // setTimeout(() => setOpenOff(), 100)

    // setTimeout(() => signUp({ username, password }), 200)

    try {
      const data = await request('/api/auth/register/', 'POST', {
        email: username,
        password,
      })
    } catch {}

    // setTimeout(() => setOpenOff(), 500)

    // // console.log(username, password)

    // setTimeout(() => {
    //   setUsername('')
    //   setPassword('')
    //   setPassword2('')
    //   setUsernameState('default')
    //   setPasswordState('default')
    //   setPassword2State('default')
    //   setUsernameMessage('')
    //   setPasswordMessage('')
    //   setPassword2Message('')
    // }, 1050)
    console.log('end')
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
