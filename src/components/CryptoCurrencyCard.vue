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

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})
const numberFormatter = new Intl.NumberFormat('en-US')
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
      <h3 class="text-lg font-semibold">{{ moneyFormatter.format(ticker.quote.USD.price) }}</h3>
      <p>Volume: {{ moneyFormatter.format(ticker.quote.USD.volume_24h) }}</p>
      <p>Market Cap: {{ moneyFormatter.format(ticker.quote.USD.market_cap) }}</p>
      <p>Circulating Supply: {{ numberFormatter.format(ticker.circulating_supply) }}</p>
      <Badge
        :severity="ticker.quote.USD.percent_change_24h >= 0 ? 'success' : 'danger'"
        :value="numberFormatter.format(ticker.quote.USD.percent_change_24h)"
      ></Badge>
    </template>
  </Card>
</template>
