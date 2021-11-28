import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NavActionCreators from '../redux/nav/nav.actions'
import * as AuthActionCreators from '../redux/auth/auth.actions'

export const useNavAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(NavActionCreators, dispatch)
}

export const useAuthAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AuthActionCreators, dispatch)
}
