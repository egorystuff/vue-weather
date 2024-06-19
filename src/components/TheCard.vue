<script setup lang="ts">
import { type DaysType } from '@/types'
import BaseIcon from './BaseIcon.vue'

const { day } = defineProps<{ day: DaysType }>()
</script>

<template>
  <div>{{ day.day }}</div>
  <div>{{ day.day_info }}</div>
  <div>
    <BaseIcon viewBox="0 0 48 48" fill="none" :name="day.icon_id" />
  </div>
  <div>{{ day.temp_day }}</div>
  <div>{{ day.temp_night }}</div>
  <div>{{ day.info }}</div>
</template>
