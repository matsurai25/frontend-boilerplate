import { ajax } from 'jquery'
import { apis } from './const'
import { User } from './modules/context/types'

const get = (url: string, params?: any) => {
  return new Promise(resolve => {
    ajax({
      url: url,
      data: params,
      xhrFields: {
        withCredentials: true
      }
    }).done(res => {
      resolve(res.body)
    })
  })
}

const post = (url: string, params?: any) => {
  return new Promise(resolve => {
    ajax({
      url: url,
      method: 'post',
      data: params,
      xhrFields: {
        withCredentials: true
      }
    }).done(res => {
      resolve(res.body)
    })
  })
}

export const getContextUser = async () =>
  get(apis.getContextUser) as Promise<User>
