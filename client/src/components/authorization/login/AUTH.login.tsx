import React, { useState, useEffect, KeyboardEvent, useRef } from 'react'
// import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material'
import { TextField, Button, Checkbox, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@material-ui/icons'
import { NBAbutton } from '../../profile/NBA.button'
import { NBAinput } from '../../profile/NBA.input'
import { useDidMountEffect } from '../../../utils/useDidMountEffect'

const theme = createTheme({
  typography: {
    // fontFamily: ['Chilanka', 'cursive'].join(','),
    fontFamily: 'courier new',
  },
})

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

  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    let id = setTimeout(() => setShowPassword(false), 5000)
    return () => clearTimeout(id)
  }, [showPassword])

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

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

  return (
    <div
      className={`flex flex-col justify-evenly items-center gap-1 font-courier no-select box-border`}
      style={{ width: '400px', height: '400px' }}
    >
      <ThemeProvider theme={theme}>
        <div style={{ width: '100%', marginBottom: '25px' }}>
          <NBAinput
            value={username}
            onChange={setUsername}
            id={`login`}
            type={`username`}
            placeholder={`USERNAME`}
            helper={error ? 'incorrect username or password' : ' '}
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
            placeholder={`PASSWORD`}
            helper={error ? 'incorrect username or password' : ' '}
            error={error}
            success={success}
            onEnter={handleEnterPass}
            focus={passFocus}
          />
        </div>
        <div className={`flex flex-col gap-2`}>
          <div
            className={`flex  flex-row justify-start  mr-2 box-border`}
            style={{ width: '400px' }}
          >
            <div
              className={`flex-grow flex  justify-start items-center hover:text-blue-400 focus:text-red-800 outline-none`}
              onMouseDown={handleRememberMeChange}
            >
              <div className={`flex  items-center cursor-pointer`}>
                <Checkbox
                  checked={rememberMe}
                  inputProps={{ 'aria-label': 'controlled' }}
                  color={`info`}
                />
                remember me
              </div>
            </div>
            <div
              className={`mr-2 hover:text-blue-400 focus:text-red-800 outline-none cursor-pointer flex justify-center items-center`}
              onMouseDown={() => {}}
            >
              forgot password?
            </div>
          </div>
          <div className={`w-full flex justify-center mt-4`}>
            <NBAbutton
              onClick={handleSubmit}
              tag={`LOGIN`}
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
      </ThemeProvider>
    </div>
  )
}
