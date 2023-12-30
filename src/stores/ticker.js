import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTickerStore = defineStore('TickerStore', {
  state: () => ({
    tickers: []
  }),
  actions: {
    async load() {
      // Fake the delay, like the real api would
      await new Promise((resolve) => setTimeout(resolve, 200))
      const { data: tickers } = (await import('@/data/tickers.json')).default
      this.tickers = tickers.slice(0, 18)
      this.sortPrice()
    },
    sortTrending() {
      this.tickers = this.tickers.sort((a, b) => b.cmc_rank - a.cmc_rank)
    },
    sortPrice() {
      this.tickers = this.tickers.sort((a, b) => b.quote.USD.price - a.quote.USD.price)
    },
    sortVolume() {
      this.tickers = this.tickers.sort((a, b) => b.quote.USD.volume_24h - a.quote.USD.volume_24h)
    },
    sortMarketCap() {
      this.tickers = this.tickers.sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)
    }
  },
  getters: {
    isEmpty: (state) => state.tickers.length === 0
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTickerStore, import.meta.hot))
}
