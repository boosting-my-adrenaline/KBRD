import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box'
import { ThemeProvider, createTheme, OutlinedInput } from '@mui/material'
import { TextField, Button, InputAdornment, IconButton } from '@mui/material'
import {
  PasswordState,
  SignupPasswordColor,
  UsernameState,
} from '../auth.types'
import { SignupUsernameColor } from '../auth.types'
import { ErrorOutline, VisibilityOff, Visibility } from '@material-ui/icons'

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

  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleShowPassword2 = () => {
    setShowPassword2((prev) => !prev)
  }

  useEffect(() => {
    let id = setTimeout(() => setShowPassword(false), 5000)
    return () => clearTimeout(id)
  }, [showPassword])

  useEffect(() => {
    let id = setTimeout(() => setShowPassword2(false), 5000)
    return () => clearTimeout(id)
  }, [showPassword2])

  return (
    <div
      className={`flex flex-col justify-evenly items-center gap-2 font-courier no-select box-border`}
      style={{ width: '400px', height: '400px' }}
    >
      <ThemeProvider theme={theme}>
        <div style={{ width: '100%', marginBottom: '' }}>
          <TextField
            className={``}
            style={{ width: '100%', fontFamily: 'courier' }}
            id="outlined-basic"
            label="USERNAME"
            type="namef"
            variant="outlined"
            helperText={usernameMessage || ' '}
            error={usernameState === 'error'}
            value={username}
            focused={!!username}
            onChange={(e) => setUsername(e.target.value.replaceAll(' ', ''))}
            color={usernameColor}
          />
        </div>
        <div className={``} style={{ width: '100%' }}>
          <TextField
            style={{ width: '100%' }}
            // id="outlined-basic"
            label="PASSWORD"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            helperText={passwordMessage || ' '}
            error={passwordState === 'error'}
            value={password}
            onChange={(e) => setPassword(e.target.value.replaceAll(' ', ''))}
            focused={!!password}
            color={passwordColor}
            // endAdornment={
          />
          <IconButton
            style={{ position: 'absolute', transform: `translate(-50px, 8px)` }}
            onMouseDown={handleShowPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <div style={{ width: '100%' }}>
          <TextField
            style={{ width: '100%' }}
            id="outlined-basic"
            label="REPEAT PASSWORD"
            type={showPassword2 ? 'text' : 'password'}
            variant="outlined"
            helperText={password2Message || ' '}
            error={password2State === 'error'}
            value={password2}
            onChange={(e) => setPassword2(e.target.value.replaceAll(' ', ''))}
            focused={!!password2}
            color={password2Color}
          />
          <IconButton
            style={{ position: 'absolute', transform: `translate(-50px, 8px)` }}
            onMouseDown={handleShowPassword2}
            edge="end"
          >
            {showPassword2 ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <div className={`flex flex-col gap-2`}>
          <div className={`w-full flex justify-center`}>
            <Button
              style={{
                fontSize: '1.3em',
                borderRadius: 10,
                padding: '7px 30px',
              }}
              variant={`contained`}
              size={`large`}
              color={noErrors ? 'info' : 'error'}
              onMouseDown={handleSubmit}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
