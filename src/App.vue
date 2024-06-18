<script setup lang="ts">
import TheHome from './pages/TheHome.vue'
import TheHeader from './components/TheHeader.vue'
import { ref, type Ref } from 'vue'

const theme: Ref<string> = ref('light')

const changeTheme = (): void => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div :class="theme">
    <div class="bg-background container max-w-7xl min-h-screen mx-auto p-4 rounded-xl">
      <TheHeader @change-theme="changeTheme" />
      <TheHome />
    </div>
  </div>
</template>

<style scoped></style>
