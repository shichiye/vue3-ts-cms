import cyRequest from '../index'

import type { IAccount, IDataType, ILoginState } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginAction(account: IAccount) {
  return cyRequest.post<IDataType<ILoginState>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return cyRequest.get<IDataType<any>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return cyRequest.get<IDataType<any>>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
