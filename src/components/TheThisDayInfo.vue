<script setup lang="ts">
import { IndicatorsType, type Item } from '@/types'
import ThisDayItem from './ThisDayItem.vue'

const items: Item[] = [
  { iconId: IndicatorsType.TEMP, name: 'Температура', value: '20° - ощущается как 17°' },
  {
    iconId: IndicatorsType.PRESSURE,
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное'
  },
  { iconId: IndicatorsType.PREC, name: 'Осадки', value: 'Без осадков' },
  { iconId: IndicatorsType.WIND, name: 'Ветер', value: '3 м/с юго-запад - легкий ветер' }
]
</script>

<template>
  <div class="relative border border-slate-200 shadow-lg rounded-xl min-h-64 p-4 w-2/3 p-2 ml-2">
    <div class="flex justify-between items-center p-2"></div>
    <img class="absolute right-0 top-0" src="../assets/images/cloud.png" alt="cloud" />

    <ThisDayItem v-for="item in items" :key="item.iconId" :item="item" />
  </div>
</template>
