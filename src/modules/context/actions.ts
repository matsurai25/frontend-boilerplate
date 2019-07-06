import { Action } from 'redux'
import { User } from './types'

export enum ActionTypeKeys {
  FETCH_CONTEXT_USER_START = 'FETCH_CONTEXT_USER_START',
  FETCH_CONTEXT_USER_SUCCESS = 'FETCH_CONTEXT_USER_SUCCESS'
}

export type ActionTypes = ReturnType<
  | typeof fetchContextUserStart
  | typeof fetchContextUserSuccess
>

export interface FetchContextUserStartAction
  extends Action {
  type: ActionTypeKeys.FETCH_CONTEXT_USER_START
}

export const fetchContextUserStart = (): FetchContextUserStartAction => ({
  type: ActionTypeKeys.FETCH_CONTEXT_USER_START
})

export interface FetchContextUserSuccessAction
  extends Action {
  type: ActionTypeKeys.FETCH_CONTEXT_USER_SUCCESS
  user: User
}

export const fetchContextUserSuccess = (
  user: User
): FetchContextUserSuccessAction => ({
  type: ActionTypeKeys.FETCH_CONTEXT_USER_SUCCESS,
  user
})
