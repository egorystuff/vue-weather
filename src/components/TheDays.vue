<script setup lang="ts">
import { weatherForSomeDays } from '@/API/updateWeatherForSomeDays'
import TheCard from './TheCard.vue'
import TheTabs from './TheTabs.vue'
</script>

<template>
  <div class="m-2 mt-16">
    <TheTabs />

    <div
      class="grid gap-3 grid-cols-7 bg-component border border-component shadow-lg rounded-xl p-4"
    >
      <TheCard v-for="day in weatherForSomeDays" :key="day.id" :day="day" />
    </div>
  </div>
</template>
