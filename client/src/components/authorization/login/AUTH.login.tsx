import React, { useState } from 'react'
// import Box from '@mui/material/Box'
import { NBAbutton } from '../../profile/NBA.button'
import { NBAinput } from '../../profile/NBA.input'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'
import { NBAcheckbox } from '../../profile/NBA.checkbox'
import useLanguage from '../../../hooks/useLanguage'
import useDarkMode from '../../../hooks/useDarkMode'

interface IProps {
  username: string
  password: string
  setUsername(username: string): void
  setPassword(password: string): void
  error: boolean
  success: boolean
  rememberMe: boolean
  setRememberMe(value: boolean): void
  handleSubmit(): void
}

export const AUTHlogin: React.FC<IProps> = ({
  username,
  password,
  setUsername,
  setPassword,
  error,
  success,
  rememberMe,
  setRememberMe,
  handleSubmit,
}) => {
  const handleRememberMeChange = (): void => {
    if (rememberMe) {
      setRememberMe(false)
    } else {
      setRememberMe(true)
    }
  }

  const { isDarkMode } = useDarkMode()

  const [userEnter, setUserEnter] = useState(0)
  const [passEnter, setPassEnter] = useState(0)

  const [userFocus, setUserFocus] = useState(0)
  const [passFocus, setPassFocus] = useState(0)

  const handleEnterUser = () => {
    setUserEnter((prev) => prev + 1)
  }

  const handleEnterPass = () => {
    setPassEnter((prev) => prev + 1)
  }

  useDidMountEffect(() => {
    if (!username) {
      return
    } else if (!password) {
      setPassFocus((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }, [userEnter])

  useDidMountEffect(() => {
    if (!password) {
      return
    } else if (!username) {
      setUserFocus((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }, [passEnter])

  const { isEng } = useLanguage()

  return (
    <div
      className={` no-select box-border flex flex-col items-center justify-evenly gap-1`}
      style={{ width: '400px', height: '400px' }}
    >
      <div style={{ width: '100%', marginBottom: '25px' }}>
        <NBAinput
          value={username}
          onChange={setUsername}
          id={`login`}
          type={`username`}
          placeholder={isEng ? `USERNAME` : `ЛОГИН`}
          helper={
            error
              ? isEng
                ? 'incorrect username or password'
                : `неверный логин или пароль`
              : ' '
          }
          error={error}
          success={success}
          onEnter={handleEnterUser}
          focus={userFocus}
        />
      </div>
      <div style={{ width: '100%' }}>
        <NBAinput
          value={password}
          onChange={setPassword}
          id={`password`}
          type={`password`}
          placeholder={isEng ? `PASSWORD` : `ПАРОЛЬ`}
          helper={
            error
              ? isEng
                ? 'incorrect username or password'
                : `неверный логин или пароль`
              : ' '
          }
          error={error}
          success={success}
          onEnter={handleEnterPass}
          focus={passFocus}
          password
        />
      </div>
      <div className={`flex flex-col gap-2`}>
        <div
          className={`mr-2  box-border flex  flex-row justify-start`}
          style={{ width: '400px' }}
        >
          <div className={`flex flex-grow items-center justify-start pl-4 `}>
            <span
              className={`flex outline-none transition duration-150 ${
                isDarkMode && `text-gray-100`
              } ease-in-out hover:text-blue-400 focus:text-red-800`}
              onMouseDown={handleRememberMeChange}
            >
              <NBAcheckbox active={rememberMe} />
              <span className={`ml-3 cursor-pointer `}>
                {isEng ? `remember me` : 'запомнить меня'}
              </span>
            </span>
          </div>
          <div
            className={`mr-2 flex cursor-pointer items-center justify-center outline-none transition duration-150 ease-in-out 
              ${
                isDarkMode && `text-gray-100`
              } hover:text-blue-400 focus:text-red-800`}
            onMouseDown={() => {}}
          >
            {isEng ? `forgot password?` : 'забыли пароль?'}
          </div>
        </div>
        <div className={`mt-4 flex w-full justify-center`}>
          <NBAbutton
            onClick={handleSubmit}
            tag={isEng ? `LOGIN` : `ВОЙТИ`}
            border={
              !username || !password ? `border-red-500` : `border-sky-500`
            }
            hov={!username || !password ? `bg-red-500` : `bg-sky-500`}
            bg={!username || !password ? `bg-red-300` : `bg-sky-300`}
            px={`px-16`}
            disableCursor={!username || !password}
          />
        </div>
      </div>
    </div>
  )
}
