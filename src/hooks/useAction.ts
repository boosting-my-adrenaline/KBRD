import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NavActionCreators from '../redux/nav/nav.actions'

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(NavActionCreators, dispatch)
}
