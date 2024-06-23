<script setup lang="ts">
import { onMounted, provide } from 'vue'
import { changeTheme, storage, theme } from './changeTheme'
import { cityWeatherData, fetchWeatherData } from './API/fetchWeatherData'
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import ThePopup from './components/ThePopup.vue'

onMounted(() => {
  fetchWeatherData('Minsk')
  theme.value = storage.getItem('theme') ? storage.getItem('theme') : 'light'
})

provide('cityWeatherData', cityWeatherData)
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
