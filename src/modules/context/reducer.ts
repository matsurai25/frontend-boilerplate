import { ContextState } from './types'
import {
  ActionTypes,
  ActionTypeKeys
} from './actions'

const initialState: ContextState = {
  isLoading: false,
  user: null,
  csrfToken: null
}

export default function contextReducer(
  state: ContextState = initialState,
  action: ActionTypes
): ContextState {
  switch (action.type) {
    case ActionTypeKeys.FETCH_CONTEXT_USER_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypeKeys.FETCH_CONTEXT_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
        isLoading: false
      }
    default:
      return state
  }
}
