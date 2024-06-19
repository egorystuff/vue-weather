<script setup lang="ts">
const tabs: Array<{ value: string }> = [
  { value: 'На неделю' },
  { value: 'На 10 дней' },
  { value: 'На месяц' }
]
</script>

<template>
  <div class="flex justify-between mb-2">
    <div class="flex">
      <div
        class="flex items-center justify-center text-text text-sm px-4 py-1 mr-4 bg-component border border-component shadow-lg rounded-lg cursor-pointer"
        v-for="tab in tabs"
        :key="tab.value"
      >
        {{ tab.value }}
      </div>
    </div>

    <div
      class="flex items-center justify-center text-text text-sm px-4 py-1 bg-component border border-component shadow-lg rounded-lg cursor-pointer"
    >
      Отменить
    </div>
  </div>
</template>
