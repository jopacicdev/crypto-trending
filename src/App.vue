<script setup lang="ts">
import CryptoCurrencyCard from '@/components/CryptoCurrencyCard.vue'
import Skeleton from 'primevue/skeleton'
import { useTickerStore } from '@/stores/ticker'
import { useFavoriteStore } from '@/stores/favorite'
import { storeToRefs } from 'pinia'
import SortButtonGroup from '@/components/SortButtonGroup.vue'

const tickerStore = useTickerStore()
tickerStore.load()

const favoriteStore = useFavoriteStore()

const { tickers, isEmpty } = storeToRefs(tickerStore)
const { favorites } = storeToRefs(favoriteStore)
</script>

<template>
  <main class="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
    <header class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-semibold dark:text-white">🔥 Top Trending Cryptocurrencies 🚀</h1>
      <div class="flex gap-2 text-white">
        <span>Sort by:</span>
        <SortButtonGroup />
        <span>Favorites: {{ favorites.length }}</span>
      </div>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-if="isEmpty">
        <Skeleton :shape="'rect'" :width="'100%'" :height="'300px'" />
        <Skeleton :shape="'rect'" :width="'100%'" :height="'300px'" />
        <Skeleton :shape="'rect'" :width="'100%'" :height="'300px'" />
      </template>
      <template v-else>
        <CryptoCurrencyCard
          v-for="ticker in tickers"
          :key="ticker.symbol"
          :ticker="ticker"
          :isFavorite="favorites.indexOf(ticker.symbol) > -1"
          @favorite="(symbol) => favoriteStore.toggleFavorite(symbol)"
        />
      </template>
    </section>
  </main>
</template>
