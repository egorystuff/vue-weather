<script setup lang="ts">
import { IconName, IndicatorsType, WeatherIconsType, type ItemType } from '../types'
import BaseIcon from './BaseIcon.vue'
import BaseWeatherIcon from './BaseWeatherIcon.vue'
import ThisDayItem from './ThisDayItem.vue'

const items: Array<ItemType> = [
  {
    iconId: IndicatorsType.TEMP,
    name: 'Температура',
    value: '20° - ощущается как 17°',
    boxView: '-2 0 25 25'
  },
  {
    iconId: IndicatorsType.PRESSURE,
    name: 'Давление',
    value: '765 мм ртутного столба - нормальное',
    boxView: '0 0 19 19'
  },
  {
    iconId: IndicatorsType.PREC,
    name: 'Осадки',
    value: 'Переменная облачность, без осадков',
    boxView: '5 1 25 25'
  },
  {
    iconId: IndicatorsType.WIND,
    name: 'Ветер',
    value: '3 м/с юго-запад - легкий ветер',
    boxView: '-1 -2 22 22'
  }
]
</script>

<template>
  <div>
    <div class="absolute top-0 left-0 w-full h-full z-10 bg-slate-900 opacity-60"></div>
    <div
      class="bg-popup absolute border border-popup shadow-lg rounded-xl h-64 p-4 p-2 ml-2 z-20 inset-y-1/4 inset-x-1/4"
    >
      <BaseIcon
        viewBox="0 0 18 18"
        class="absolute right-6 top-6 w-6 h-6 cursor-pointer z-30 hover:rotate-180 transition hover:scale-110"
        :name="IconName.CLOSE"
      />
      <div class="flex justify-between items-center p-2"></div>
      <img class="absolute right-0 top-0" src="../assets/images/cloud.png" alt="cloud" />

      <div class="flex justify-between">
        <div class="w-1/4">
          <div>
            <div class="text-primary text-5xl font-medium">20&deg;C</div>
            <div class="text-text text-2xl mt-2">Сегодня</div>
            <BaseWeatherIcon :class="'weatherIcon w-10 h-10 bg'" :name="WeatherIconsType.FOG" />
          </div>

          <div class="text-lg text-slate-400">
            <div>Время <span>21:54</span></div>
            <div>Минск</div>
          </div>
        </div>

        <div>
          <ThisDayItem v-for="item in items" :key="item.iconId" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
