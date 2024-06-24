<script setup lang="ts">
import { WeatherIconsType } from '@/types'
import BaseWeatherIcon from './BaseWeatherIcon.vue'

defineProps<{ weatherData: any }>()
</script>

<template>
  <div
    class="bg-component border border-component shadow-lg rounded-xl min-h-64 p-4 w-1/3 p-2 mr-2"
  >
    <div class="flex justify-between items-center p-2">
      <div>
        <div class="text-primary text-6xl font-medium">{{ weatherData.current?.temp_c }}&deg;C</div>
        <div class="text-text text-3xl mt-2">Сегодня</div>
      </div>
      <div>
        <BaseWeatherIcon :class="'weatherIcon w-20 h-20'" :name="WeatherIconsType.SUN" />
      </div>
    </div>

    <div class="p-2 text-lg text-slate-400">
      <div>
        Время: <span>{{ weatherData.location?.localtime }}</span>
      </div>
      <div>{{ weatherData.location?.name }}</div>
      <div>{{ weatherData.location?.country }}</div>
    </div>
  </div>
</template>
