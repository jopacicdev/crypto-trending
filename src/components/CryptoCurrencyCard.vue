<script setup lang="ts">
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import { computed } from 'vue'

defineProps({
  ticker: { type: Object, required: true },
})
</script>

<template>
  <Card>
    <template #title> {{ ticker.name }} </template>
    <template #subtitle> {{ ticker.symbol }} </template>
    <template #content>
      <h3 class="text-lg font-semibold">
        ${{ ticker.quote.USD.price.toFixed(2) }}
      </h3>
      <Badge severity="success" :value="ticker.quote.USD.percent_change_24h"></Badge>
    </template>
  </Card>
</template>