<script setup lang="ts">
import { useTickerStore } from '@/stores/ticker'
import Button from 'primevue/button'
import { storeToRefs } from 'pinia'

const tickerStore = useTickerStore()
const { isEmpty } = storeToRefs(tickerStore)
</script>

<template>
  <Button
    label="Trending"
    icon="pi pi-chart-line"
    size="small"
    :loading="isEmpty"
    @click="tickerStore.sortTrending()"
  />
  <Button
    label="Price"
    icon="pi pi-dollar"
    size="small"
    :loading="isEmpty"
    @click="tickerStore.sortPrice()"
  />
  <Button
    label="Volume"
    icon="pi pi-chart-pie"
    size="small"
    :loading="isEmpty"
    @click="tickerStore.sortVolume()"
  />
  <Button
    label="Market Cap"
    icon="pi pi-chart-bar"
    size="small"
    :loading="isEmpty"
    @click="tickerStore.sortMarketCap()"
  />
</template>
