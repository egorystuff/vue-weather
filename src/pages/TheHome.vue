<script setup lang="ts">
import TheThisDay from '../components/TheThisDay.vue'
import TheThisDayInfo from '../components/TheThisDayInfo.vue'
import TheDays from '../components/TheDays.vue'
import type { DataApi } from '@/API/fetchWeatherData'
</script>

<template>
  <div class="flex justify-between items-center m-2 mt-6">
    <TheThisDay />
    <TheThisDayInfo />
  </div>

  <TheDays class="m-2 mt-6" />
</template>
