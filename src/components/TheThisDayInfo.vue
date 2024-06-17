<script setup lang="ts">
import type { Item } from '@/types'
import ThisDayItem from './ThisDayItem.vue'

const items: Item[] = [
  { iconId: 'TEMP', name: 'Температура', value: '20° - ощущается как 17°' },
  { iconId: 'PRESSURE', name: 'Давление', value: '765 мм ртутного столба - нормальное' },
  { iconId: 'precipitation', name: 'Осадки', value: 'Без осадков' },
  { iconId: 'wind', name: 'Ветер', value: '3 м/с юго-запад - легкий ветер' }
]
</script>

<template>
  <div class="relative border border-slate-200 shadow-lg rounded-xl h-64 p-4 w-2/3 p-2 ml-2">
    <div class="flex justify-between items-center p-2"></div>
    <img class="absolute right-0 top-0" src="../assets/images/cloud.png" alt="" />

    <ThisDayItem v-for="item in items" :key="item.iconId" :item="item" />
  </div>
</template>
