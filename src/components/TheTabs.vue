<script setup lang="ts">
import { inject } from 'vue'

const { selectDays } = inject<any>('weatherData')

const tabs: Array<{ name: string; value: number }> = [
  { name: 'На 1 день', value: 1 },
  { name: 'На 3 дня', value: 3 },
  { name: 'На 7 дней', value: 7 },
  { name: 'На 14 дней', value: 14 }
]

const handleClickBtn = (event: Event) => {
  selectDays.value = Number((event.target as HTMLButtonElement).value)
}
</script>

<template>
  <div class="flex justify-between mb-2">
    <div class="flex">
      <button
        class="flex items-center justify-center text-text text-sm px-4 py-1 mr-4 bg-component border border-component shadow-lg rounded-lg cursor-pointer hover:scale-105 hover:text-primary transition"
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        @click="handleClickBtn"
      >
        {{ tab.name }}
      </button>
    </div>

    <button
      class="flex items-center justify-center text-text text-sm px-4 py-1 bg-component border border-component shadow-lg rounded-lg cursor-pointer hover:scale-105 hover:text-primary transition"
      :value="1"
      @click="handleClickBtn"
    >
      Сброс
    </button>
  </div>
</template>
