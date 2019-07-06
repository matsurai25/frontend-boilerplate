import { combineReducers } from 'redux'
import { ContextState } from './context/types'
import contextReducer from './context/reducer'

export interface RootState {
  context: ContextState
}

export const rootReducer = combineReducers<RootState>({
  context: contextReducer
})
