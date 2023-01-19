import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => (
    {
      theme: 'light',
    }
  ),
  getters: {
    mode: (state) => {
      return state.theme
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    changeTheme(value) {
      this.theme = value
    },
  },
})