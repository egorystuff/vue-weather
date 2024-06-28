<script setup lang="ts">
import { onMounted, provide, ref, watch, type InjectionKey, type Ref } from 'vue'
import { changeTheme, storage, theme } from './changeTheme'
import { cityWeatherData, fetchWeatherData } from './API/fetchWeatherData'
import { updateIndicatorsItems } from './API/updateIndicatorsItems'
import { updateWeatherForSomeDays } from './API/updateWeatherForSomeDays'
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import ThePopup from './pages/ThePopup.vue'

const selectCity: Ref<string> = ref('Минск')
const selectDays: Ref<number> = ref(3)
const isShowPopup: Ref<boolean> = ref(false)
const activeIdPopup: Ref<number | null> = ref(null)

onMounted(async () => {
  theme.value = storage.getItem('theme') ? storage.getItem('theme') : 'light'
  await fetchWeatherData('Минск', selectDays.value)
  updateIndicatorsItems(cityWeatherData.value)
  updateWeatherForSomeDays(cityWeatherData.value)
})

watch(selectDays, async () => {
  await fetchWeatherData(selectCity.value, selectDays.value)
  updateWeatherForSomeDays(cityWeatherData.value)
})

watch(selectCity, async () => {
  await fetchWeatherData(selectCity.value, selectDays.value)
  updateIndicatorsItems(cityWeatherData.value)
  updateWeatherForSomeDays(cityWeatherData.value)
})

// const key = Symbol() as InjectionKey<string>
provide('weatherData', { cityWeatherData, selectCity, selectDays })
provide('popup', { isShowPopup, activeIdPopup })
// provide(key, 'weatherData', )
</script>

<template>
  <div class="relative">
    <div :class="theme">
      <ThePopup v-show="isShowPopup" />

      <div class="bg-background container max-w-7xl min-h-screen mx-auto p-4 rounded-xl">
        <TheHeader @change-theme="changeTheme" />
        <TheHome />
      </div>
    </div>
  </div>
</template>
