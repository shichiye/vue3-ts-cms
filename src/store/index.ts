import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {}
  },
  mutations: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLoginInfo')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
