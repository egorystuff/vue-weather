<script setup lang="ts">
import { IconName, type DaysType } from '@/types'
import TheCard from './TheCard.vue'

const days: Array<DaysType> = [
  {
    day: 'Сегодня',
    day_info: '28 авг',
    icon_id: IconName.SUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Завтра',
    day_info: '29 авг',
    icon_id: IconName.SMALL_RAIN_SUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'небольшой дождь и солнце'
  },
  {
    day: 'Ср',
    day_info: '30 авг',
    icon_id: IconName.SMALL_RAIN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'небольшой дождь'
  },
  {
    day: 'Чт',
    day_info: '28 авг',
    icon_id: IconName.MAINLY_CLOUDY,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Пт',
    day_info: '28 авг',
    icon_id: IconName.RAIN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Сб',
    day_info: '28 авг',
    icon_id: IconName.SUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Вс',
    day_info: '28 авг',
    icon_id: IconName.SUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  }
]
</script>

<template>
  <div>
    <TheCard v-for="day in days" :key="day.day" :day="day" />
  </div>
</template>
