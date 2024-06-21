<script setup lang="ts">
import { onMounted } from 'vue'
import { changeTheme, storage, theme } from './changeTheme'
import axios from 'axios'
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import ThePopup from './components/ThePopup.vue'

const APIKey = '7d8aeec9c3044f21849121348242106'

const fetchItems = async () => {
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=London&days=7`
    )
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchItems()
  theme.value = storage.getItem('theme')
})
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
