import React, { useEffect, useState, KeyboardEvent } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import {
  PasswordState,
  SignupPasswordColor,
  UsernameState,
} from '../auth.types'
import { SignupUsernameColor } from '../auth.types'
import { NBAbutton } from '../../profile/NBA.button'
import { NBAinput } from '../../profile/NBA.input'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import useLanguage from '../../../hooks/useLanguage'

const theme = createTheme({
  typography: {
    // fontFamily: ['Chilanka', 'cursive'].join(','),
    fontFamily: 'courier new',
  },
})

interface IProps {
  username: string
  setUsername(username: string): void
  password: string
  setPassword(password: string): void
  password2: string
  setPassword2(password: string): void
  usernameMessage: null | string
  passwordMessage: null | string
  password2Message: null | string
  usernameState: UsernameState
  passwordState: PasswordState
  password2State: PasswordState
  noErrors: boolean
  handleSubmit(): void
  isLoading: boolean
}

export const AUTHlsignup: React.FC<IProps> = ({
  username,
  setUsername,
  password,
  setPassword,
  password2,
  setPassword2,
  usernameMessage,
  passwordMessage,
  password2Message,
  usernameState,
  passwordState,
  password2State,
  noErrors,
  handleSubmit,
  isLoading,
}) => {
  const [usernameColor, setUsernameColor] =
    useState<SignupUsernameColor>('info')

  useEffect(() => {
    if (usernameState === 'default') setUsernameColor('info')
    else if (usernameState === 'success') setUsernameColor('success')
    else if (usernameState === 'error') setUsernameColor('error')
  }, [usernameState])

  const [passwordColor, setPasswordColor] =
    useState<SignupPasswordColor>('info')

  useEffect(() => {
    if (passwordState === 'default') setPasswordColor('info')
    else if (passwordState === 'success') setPasswordColor('success')
    else if (passwordState === 'warning') setPasswordColor('warning')
    else if (passwordState === 'error') setPasswordColor('error')
  }, [passwordState])

  const [password2Color, setPassword2Color] =
    useState<SignupUsernameColor>('info')

  useEffect(() => {
    if (password2State === 'default') setPassword2Color('info')
    else if (password2State === 'success') setPassword2Color('success')
    else if (password2State === 'error') setPassword2Color('error')
  }, [password2State])

  ////////

  const [userEnter, setUserEnter] = useState(0)
  const [passEnter, setPassEnter] = useState(0)
  const [pass2Enter, setPass2Enter] = useState(0)

  const [userFocus, setUserFocus] = useState(0)
  const [passFocus, setPassFocus] = useState(0)
  const [pass2Focus, setPass2Focus] = useState(0)

  const handleEnterUser = () => {
    setUserEnter((prev) => prev + 1)
  }

  const handleEnterPass = () => {
    setPassEnter((prev) => prev + 1)
  }

  const handleEnterPass2 = () => {
    setPassEnter((prev) => prev + 1)
  }

  useDidMountEffect(() => {
    if (!username || usernameState === `error`) {
      return
    } else if (!password || passwordState === `error`) {
      setPassFocus((prev) => prev + 1)
    } else if (!password2 || password2State === `error`) {
      setPass2Focus((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }, [userEnter])

  useDidMountEffect(() => {
    if (!password || passwordState === `error`) {
      return
    } else if (!username || usernameState === `error`) {
      setUserFocus((prev) => prev + 1)
    } else if (!password2 || password2State === `error`) {
      setPass2Focus((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }, [passEnter])

  useDidMountEffect(() => {
    if (!password2 || password2State === `error`) {
      return
    } else if (!username || usernameState === `error`) {
      setUserFocus((prev) => prev + 1)
    } else if (!password || passwordState === `error`) {
      setPassFocus((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }, [pass2Enter])

  const { isEng } = useLanguage()
  return (
    <div
      className={`font-courier no-select box-border flex flex-col items-center justify-evenly gap-2`}
      style={{ width: '400px', height: '400px' }}
    >
      <ThemeProvider theme={theme}>
        <div style={{ width: '100%', marginBottom: '' }}>
          <NBAinput
            value={username}
            onChange={setUsername}
            id={`usernameSignUp`}
            placeholder={isEng ? `USERNAME` : ` ЛОГИН`}
            helper={usernameMessage || ` `}
            error={usernameState === 'error'}
            success={usernameState === `success`}
            onEnter={handleEnterUser}
            focus={userFocus}
          />
        </div>
        <div className={``} style={{ width: '100%' }}>
          <NBAinput
            value={password}
            onChange={setPassword}
            id={`passwordSignUp`}
            type={`password`}
            placeholder={isEng ? `PASSWORD` : `ПАРОЛЬ`}
            helper={passwordMessage || ` `}
            error={passwordState === 'error'}
            success={passwordState === `success`}
            warning={passwordState === `warning`}
            onEnter={handleEnterPass}
            focus={passFocus}
            password
          />
        </div>
        <div style={{ width: '100%' }}>
          <NBAinput
            value={password2}
            onChange={setPassword2}
            id={`password2SignUp`}
            type={`password`}
            placeholder={isEng ? `PASSWORD` : `ПАРОЛЬ`}
            helper={password2Message || ` `}
            error={password2State === 'error'}
            success={password2State === `success`}
            warning={password2State === `warning`}
            onEnter={handleEnterPass2}
            focus={pass2Focus}
            password
            the34
          />
        </div>
        <div className={`flex flex-col gap-2`}>
          <div className={`flex w-full justify-center`}>
            <NBAbutton
              onClick={handleSubmit}
              tag={isEng ? `SUBMIT` : `ОТПРАВИТЬ `}
              border={
                passwordState === `error` ||
                password2State === `error` ||
                usernameState === `error` ||
                !username ||
                !password
                  ? `border-red-500`
                  : `border-sky-500`
              }
              hov={
                passwordState === `error` ||
                password2State === `error` ||
                usernameState === `error` ||
                !username ||
                !password
                  ? `bg-red-500`
                  : `bg-sky-500`
              }
              bg={
                passwordState === `error` ||
                password2State === `error` ||
                usernameState === `error` ||
                !username ||
                !password
                  ? `bg-red-300`
                  : `bg-sky-300`
              }
              px={`px-16`}
              disableCursor={
                passwordState === `error` ||
                password2State === `error` ||
                usernameState === `error` ||
                !username ||
                !password ||
                !password2
              }
            />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
