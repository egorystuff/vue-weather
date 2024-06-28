<script setup lang="ts">
import { IconName, IndicatorsType, type ItemType } from '../types'
import { inject, ref, watch, type Ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import ThisDayItem from './ThisDayItem.vue'

const { isShowPopup, activeIdPopup } = inject<any>('popup')
const { cityWeatherData } = inject<any>('weatherData')

const data: Ref<any> = ref()
const location: Ref<any> = ref()

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

const onCLickPopup = () => {
  isShowPopup.value = false
}

watch(activeIdPopup, () => {
  data.value = cityWeatherData.value.forecast.forecastday[activeIdPopup.value]
  location.value = cityWeatherData.value.location
  console.log(data.value)
  console.log(location.value)
})
</script>

<template>
  <div
    class="bg-popup absolute border border-popup shadow-lg rounded-xl h-min p-6 ml-2 z-50 inset-y-1/4 inset-x-1/4"
  >
    <BaseIcon
      viewBox="0 0 18 18"
      class="absolute right-6 top-6 w-6 h-6 cursor-pointer z-30 hover:rotate-180 transition hover:scale-110"
      :name="IconName.CLOSE"
      @click="onCLickPopup"
    />
    <div class="flex justify-between items-center p-2"></div>
    <img class="absolute right-0 top-0 w-1/3" src="../assets/images/cloud.png" alt="cloud" />

    <div class="flex justify-between">
      <div class="w-1/4">
        <div>
          <div class="text-primary text-4xl font-medium">
            <div class="text-text text-xl mb-4">{{ data?.date }}</div>
            <div>{{ data?.day?.maxtemp_c }} &deg;C</div>
            <div class="text-slate-400 text-4xl">{{ data?.day?.mintemp_c }} &deg;C</div>
          </div>
          <img class="w-16 h-16" :src="data?.day?.condition?.icon" alt="Иконка погоды" />
        </div>

        <div class="text-lg text-slate-400">
          <div>{{ location?.name }}</div>
          <div>{{ location?.country }}</div>
        </div>
      </div>

      <div>
        <ThisDayItem v-for="item in items" :key="item.iconId" :item="item" />
      </div>
    </div>
  </div>
</template>
