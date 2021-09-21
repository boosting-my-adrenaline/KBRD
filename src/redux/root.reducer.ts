import { navReducer } from './nav/nav.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  nav: navReducer,
})

export type RootState = ReturnType<typeof rootReducer>
