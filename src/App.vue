<script setup lang="ts">
import CryptoCurrencyCard from '@/components/CryptoCurrencyCard.vue'
import { useTickerStore } from '@/stores/ticker'
import { storeToRefs } from 'pinia'
useTickerStore().load()
const { tickers } = storeToRefs(useTickerStore())
</script>

<template>
  <main class="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
    <header class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-semibold dark:text-white">🔥 Top Trending Cryptocurrencies 🚀</h1>
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CryptoCurrencyCard
          v-for="ticker in tickers"
          :key="ticker.symbol"
          :ticker="ticker"
        />
    </section>
    <footer class="flex justify-center mt-6">
<!--      <button class="bg-blue-500 text-white">Load More</button>-->
    </footer>
  </main>
</template>