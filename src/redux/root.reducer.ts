import { authReducer } from './auth/auth.reducer'
import { navReducer } from './nav/nav.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
