import React, { useState, useEffect } from 'react'
// import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material'
import { TextField, Button, Checkbox, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@material-ui/icons'

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
  passwordError: boolean
  usernameError: boolean
  rememberMe: boolean
  setRememberMe(value: boolean): void
  handleSubmit(): void
}

export const AUTHlogin: React.FC<IProps> = ({
  username,
  password,
  setUsername,
  setPassword,
  usernameError,
  passwordError,
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

  return (
    <div
      className={`flex flex-col justify-evenly items-center gap-2 font-courier no-select box-border`}
      style={{ width: '400px', height: '400px' }}
    >
      <ThemeProvider theme={theme}>
        <div style={{ width: '100%', marginBottom: '25px' }}>
          <TextField
            className={``}
            style={{ width: '100%', fontFamily: 'courier' }}
            label="USERNAME"
            type="username"
            id="login"
            variant="outlined"
            helperText={usernameError ? 'incorrect username or password' : ' '}
            error={usernameError}
            value={username}
            onChange={(e) => setUsername(e.target.value.replaceAll(' ', ''))}
            color="info"
            // inputProps={{ style: { fontFamily: 'courier' } }} // font size of input text
            // InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
          />
        </div>
        <div style={{ width: '100%' }}>
          <TextField
            style={{ width: '100%' }}
            label="PASSWORD"
            id="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            helperText={passwordError ? 'incorrect username or password' : ' '}
            error={passwordError}
            value={password}
            onChange={(e) => setPassword(e.target.value.replaceAll(' ', ''))}
            color="info"
          />
          <IconButton
            style={{ position: 'absolute', transform: `translate(-50px, 8px)` }}
            onMouseDown={handleShowPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <div className={`flex flex-col gap-2`}>
          <div
            className={`flex  flex-row justify-start  mr-2 box-border`}
            style={{ width: '400px' }}
          >
            <button
              className={`flex-grow flex justify-start items-center hover:text-blue-400 focus:text-red-800 outline-none`}
              onMouseDown={handleRememberMeChange}
            >
              <Checkbox
                checked={rememberMe}
                inputProps={{ 'aria-label': 'controlled' }}
                color={`info`}
              />
              remember me
            </button>
            <button
              className={`mr-2 hover:text-blue-400 focus:text-red-800 outline-none`}
              onMouseDown={() => {}}
            >
              forgot password?
            </button>
          </div>
          <div className={`w-full flex justify-center`}>
            <Button
              style={{
                fontSize: '1.3em',
                borderRadius: 10,
                padding: '7px 30px',
              }}
              variant={`contained`}
              size={`large`}
              color={`info`}
              onMouseDown={handleSubmit}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}
