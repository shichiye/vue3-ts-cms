import { Module } from 'vuex'

import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'

import { IRootState } from '../types'
import { ILoginState } from './types'
import { IAccount } from '@/service/login/types'

import {
  accountLoginAction,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 动态注册路由
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 请求登陆
      const loginResult = await accountLoginAction(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 请求登陆信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4. 跳转首页
      router.push('/main')
    },

    loadLocalLoginInfo({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
