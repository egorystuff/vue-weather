<script setup lang="ts">
const tabs: Array<{ value: string }> = [
  { value: 'На 1 день' },
  { value: 'На 3 дня' },
  { value: 'На 7 дней' },
  { value: 'На 14 дней' }
]
</script>

<template>
  <div class="flex justify-between mb-2">
    <div class="flex">
      <div
        class="flex items-center justify-center text-text text-sm px-4 py-1 mr-4 bg-component border border-component shadow-lg rounded-lg cursor-pointer hover:scale-105 hover:text-primary transition"
        v-for="tab in tabs"
        :key="tab.value"
      >
        {{ tab.value }}
      </div>
    </div>

    <div
      class="flex items-center justify-center text-text text-sm px-4 py-1 bg-component border border-component shadow-lg rounded-lg cursor-pointer hover:scale-105 hover:text-primary transition"
    >
      Сброс
    </div>
  </div>
</template>
