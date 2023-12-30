<script setup lang="ts">
import Card from 'primevue/card'
import Badge from 'primevue/badge'

interface Ticker {
  name: string
  symbol: string
  circulating_supply: number
  quote: {
    USD: {
      price: number
      volume_24h: number
      percent_change_24h: number
      market_cap: number
    }
  }
}

defineProps<{
  ticker: Ticker
  isFavorite: boolean
}>()

defineEmits(['favorite'])
</script>

<template>
  <Card>
    <template #title>
      {{ ticker.name }}
      <button @click="$emit('favorite', ticker.symbol)">
        <i class="pi" :class="{ 'pi-star': !isFavorite, 'pi-star-fill': isFavorite }"></i>
      </button>
    </template>
    <template #subtitle> {{ ticker.symbol }} </template>
    <template #content>
      <h3 class="text-lg font-semibold">${{ ticker.quote.USD.price.toFixed(2) }}</h3>
      <p>Volume: ${{ ticker.quote.USD.volume_24h.toFixed(2) }}</p>
      <p>Market Cap: ${{ ticker.quote.USD.market_cap.toFixed(2) }}</p>
      <p>Circulating Supply: {{ ticker.circulating_supply }}</p>
      <Badge
        :severity="ticker.quote.USD.percent_change_24h >= 0 ? 'success' : 'danger'"
        :value="ticker.quote.USD.percent_change_24h"></Badge>
    </template>
  </Card>
</template>
