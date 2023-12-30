import { acceptHMRUpdate, defineStore } from 'pinia'

export const useFavoriteStore = defineStore('FavoriteStore', {
  state: () => ({
    favorites: []
  }),
  actions: {
    toggleFavorite(symbol) {
      const { favorites } = this
      const index = favorites.indexOf(symbol)
      if (index === -1) {
        favorites.push(symbol)
      } else {
        favorites.splice(index, 1)
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFavoriteStore, import.meta.hot))
}
