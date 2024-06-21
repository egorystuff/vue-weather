<script setup lang="ts">
import { onMounted } from 'vue'
import { changeTheme, storage, theme } from './changeTheme'
import axios from 'axios'
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import ThePopup from './components/ThePopup.vue'

// const fetchItems = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=9437c51ae0fde293b89674bf3d56b8d2`
//     )
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }

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
