<script setup lang="ts">
import { onMounted, provide, ref, watch, type Ref } from 'vue'
import { changeTheme, storage, theme } from './changeTheme'
import { cityWeatherData, fetchWeatherData } from './API/fetchWeatherData'
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import ThePopup from './components/ThePopup.vue'
import { updateIndicatorsItems } from './API/updateIndicatorsItems'

const selectCity: Ref<string> = ref('')

onMounted(async () => {
  theme.value = storage.getItem('theme') ? storage.getItem('theme') : 'light'
  console.log(cityWeatherData.value)
  await fetchWeatherData('Минск')
  updateIndicatorsItems(cityWeatherData.value)
})

watch(selectCity, async () => {
  await fetchWeatherData(selectCity.value)
  updateIndicatorsItems(cityWeatherData.value)
})

provide('weatherData', { cityWeatherData, selectCity })
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
