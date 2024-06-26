<script setup lang="ts">
import { onMounted, provide, ref, watch, type Ref } from 'vue'
import { changeTheme, storage, theme } from './changeTheme'
import { cityWeatherData, fetchWeatherData } from './API/fetchWeatherData'
import { updateIndicatorsItems } from './API/updateIndicatorsItems'
import { updateWeatherForSomeDays } from './API/updateWeatherForSomeDays'
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import ThePopup from './components/ThePopup.vue'

const selectCity: Ref<string> = ref('Минск')
const selectDays: Ref<number> = ref(1)

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

provide('weatherData', { cityWeatherData, selectCity, selectDays })
</script>

<template>
  <div class="relative">
    <div :class="theme">
      <!-- <ThePopup /> -->

      <div class="bg-background container max-w-7xl min-h-screen mx-auto p-4 rounded-xl">
        <TheHeader @change-theme="changeTheme" />
        <TheHome />
      </div>
    </div>
  </div>
</template>
