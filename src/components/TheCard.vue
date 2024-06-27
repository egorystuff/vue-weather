<script setup lang="ts">
import { type DaysType } from '@/types'

const { day } = defineProps<{ day: DaysType }>()
</script>

<template>
  <div
    class="bg-card rounded-xl w-40 flex flex-col text-text text-md p-4 m-1 hover:shadow-lg hover:cursor-pointer hover:scale-105 transition"
  >
    <div class="mb-2 text-lg">{{ day.day }}</div>
    <div class="mb-2">
      <img class="w-16 h-16" :src="day.icon_id" alt="Иконка погоды" />
    </div>
    <div class="text-lg">{{ day.temp_day }}</div>
    <div class="text-sm text-slate-400">{{ day.temp_night }}</div>
    <div class="text-sm text-slate-400">{{ day.info }}</div>
  </div>
</template>
