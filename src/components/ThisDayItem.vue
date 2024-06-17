<script setup lang="ts">
import { Indicators, type Item } from '@/types'
import IndicatorSvgIcon from './IndicatorSvgIcon.vue'

const { item } = defineProps<{ item: Item }>()
</script>

<template>
  <div>
    <IndicatorSvgIcon :name="Indicators.WIND" />
  </div>
  <div>{{ item.name }}</div>
  <div>{{ item.value }}</div>
</template>
