import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTickerStore = defineStore('TickerStore', {
  state: () => ({
    tickers: []
  }),
  actions: {
    async load() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const { data: tickers } = (await import('@/data/tickers.json')).default
      this.tickers = tickers.slice(0, 9)
    }
  },
  getters: {
    isEmpty: (state) => state.tickers.length === 0
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTickerStore, import.meta.hot))
}
