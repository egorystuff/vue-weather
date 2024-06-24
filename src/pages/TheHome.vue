<script setup lang="ts">
import TheThisDay from '../components/TheThisDay.vue'
import TheThisDayInfo from '../components/TheThisDayInfo.vue'
import TheDays from '../components/TheDays.vue'
import { inject } from 'vue'

const { cityWeatherData } = inject<any>('weatherData')
</script>

<template>
  <div class="flex justify-between items-center m-2 mt-6">
    <TheThisDay :weatherData="cityWeatherData" />
    <TheThisDayInfo :weatherData="cityWeatherData" />
  </div>

  <div>
    <TheDays class="m-2 mt-6" />
  </div>
</template>
