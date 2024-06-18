<script setup lang="ts">
import TheThisDay from '../components/TheThisDay.vue'
import TheThisDayInfo from '../components/TheThisDayInfo.vue'
</script>

<template>
  <div class="flex justify-between items-center m-2 mt-6">
    <TheThisDay class="hover:scale-105 transition" />
    <TheThisDayInfo class="hover:scale-105 transition" />
  </div>
</template>
