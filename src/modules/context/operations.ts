import { ThunkAction } from 'redux-thunk'
import { RootState } from '../reducer'
import { RootAction } from '../actions'
import {
  fetchContextUserStart,
  fetchContextUserSuccess
} from './actions'
import { getContextUser } from '../../ajax'

export const fetchContextUser = (): ThunkAction<
  void,
  RootState,
  undefined,
  RootAction
> => async dispatch => {
  dispatch(fetchContextUserStart())
  try {
    const context = await getContextUser()
    console.log(context)
    // dispatch(fetchContextUserSuccess(context))
  } catch (e) {
    // dispatch(fetchContextUserSuccess(context))
  }
}
