<script setup lang="ts">
import Card from 'primevue/card'
import Badge from 'primevue/badge'
</script>

<template>
  <Card>
    <template #title> Advanced Card </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
      <h3 class="text-lg font-semibold">$47,500.23</h3>
      <Badge severity="success" value="+5.23%"></Badge>
    </template>
  </Card>
</template>