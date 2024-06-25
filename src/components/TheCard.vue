<script setup lang="ts">
import { type DaysType } from '@/types'
import BaseWeatherIcon from './BaseWeatherIcon.vue'

const { day } = defineProps<{ day: DaysType }>()
</script>

<template>
  <div
    class="bg-card rounded-xl w-36 flex flex-col text-text text-md p-2 m-1 hover:shadow-lg hover:cursor-pointer hover:scale-105 transition"
  >
    <div class="mb-2 text-lg">{{ day.day }}</div>
    <div class="mb-4 text-sm text-slate-400">{{ day.day_info }}</div>
    <div class="mb-2">
      <BaseWeatherIcon :class="'weatherIcon w-10 h-10'" :name="day.icon_id" />
    </div>
    <div class="text-lg">{{ day.temp_day }}</div>
    <div class="text-sm text-slate-400">{{ day.temp_night }}</div>
    <div class="text-sm text-slate-400">{{ day.info }}</div>
  </div>
</template>
