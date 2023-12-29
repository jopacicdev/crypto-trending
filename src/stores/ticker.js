import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTickerStore = defineStore('TickerStore', {
  state: () => ({
    tickers: [],
  }),
  actions: {
    async load() {
      const { data: tickers } = (await import('@/data/tickers.json')).default
      this.tickers = tickers.slice(0, 9)
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTickerStore, import.meta.hot))
}