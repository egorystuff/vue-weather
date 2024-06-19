<script setup lang="ts">
import TheThisDay from '../components/TheThisDay.vue'
import TheThisDayInfo from '../components/TheThisDayInfo.vue'
import TheDays from '../components/TheDays.vue'
</script>

<template>
  <div class="flex justify-between items-center m-2 mt-6">
    <TheThisDay />
    <TheThisDayInfo />
  </div>

  <div>
    <TheDays class="m-2 mt-6" />
  </div>
</template>
