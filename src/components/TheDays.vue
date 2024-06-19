<script setup lang="ts">
import { WeatherIconsType, type DaysType } from '@/types'
import TheCard from './TheCard.vue'
import TheTabs from './TheTabs.vue'

const days: Array<DaysType> = [
  {
    day: 'Сегодня',
    day_info: '28 авг',
    icon_id: WeatherIconsType.SUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Завтра',
    day_info: '29 авг',
    icon_id: WeatherIconsType.FOG,
    temp_day: '+18',
    temp_night: '+15',
    info: 'небольшой дождь и солнце'
  },
  {
    day: 'Ср',
    day_info: '30 авг',
    icon_id: WeatherIconsType.MOSTLYCLOUDY,
    temp_day: '+18',
    temp_night: '+15',
    info: 'небольшой дождь'
  },
  {
    day: 'Чт',
    day_info: '28 авг',
    icon_id: WeatherIconsType.MOSTLYSUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Пт',
    day_info: '28 авг',
    icon_id: WeatherIconsType.RAIN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Сб',
    day_info: '28 авг',
    icon_id: WeatherIconsType.SLEET,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  },
  {
    day: 'Вс',
    day_info: '28 авг',
    icon_id: WeatherIconsType.SUN,
    temp_day: '+18',
    temp_night: '+15',
    info: 'Облачно'
  }
]
</script>

<template>
  <div class="m-2 mt-16">
    <TheTabs />
    <div
      class="flex justify-between flex-wrap bg-component border border-component shadow-lg rounded-xl p-4"
    >
      <TheCard v-for="day in days" :key="day.day" :day="day" />
    </div>
  </div>
</template>
