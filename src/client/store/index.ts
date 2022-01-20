import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  theme: 'light' | 'dark'
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    theme: 'light',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
})
