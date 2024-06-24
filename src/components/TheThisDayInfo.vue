<script setup lang="ts">
import { IndicatorsItems } from '@/API/updateIndicatorsItems'
import ThisDayItem from './ThisDayItem.vue'
</script>

<template>
  <div
    class="bg-component relative border border-component shadow-lg rounded-xl min-h-64 p-4 w-2/3 p-2 ml-2"
  >
    <div class="flex justify-between items-center p-2"></div>
    <img class="absolute right-0 top-0" src="../assets/images/cloud.png" alt="cloud" />

    <ThisDayItem v-for="item in IndicatorsItems" :key="item.iconId" :item="item" />
  </div>
</template>
