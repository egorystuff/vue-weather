<script setup lang="ts">
import { weatherForSomeDays } from '@/API/updateWeatherForSomeDays'
import { inject } from 'vue'
import TheCard from './TheCard.vue'
import TheTabs from './TheTabs.vue'

const { isShowPopup, activeIdPopup } = inject<any>('popup')

const onCLickPopup = (index: number) => {
  activeIdPopup.value = index
  isShowPopup.value = true
}
</script>

<template>
  <div class="m-2 mt-16">
    <TheTabs />

    <ul
      v-auto-animate="{ duration: 100 }"
      class="flex flex-wrap justify-between justify-items-center items-center bg-component border border-component shadow-lg rounded-xl p-4"
    >
      <TheCard
        v-for="(day, index) in weatherForSomeDays"
        :key="day.id"
        :day="day"
        @click="onCLickPopup(index)"
      />
    </ul>
  </div>
</template>
