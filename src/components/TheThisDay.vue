<script setup lang="ts">
defineProps<{ weatherData: any }>()
</script>

<template>
  <div
    class="bg-component border border-component shadow-lg rounded-xl min-h-72 p-4 w-1/3 p-2 mr-2"
  >
    <div class="flex justify-between items-center p-2">
      <div>
        <div class="text-primary text-6xl font-medium">{{ weatherData.current?.temp_c }}&deg;C</div>
        <div class="text-text text-3xl mt-2">Сегодня</div>
      </div>
      <div>
        <img
          class="w-32 h-32"
          :src="weatherData.current?.condition.icon.replace(/64x64/g, '128x128')"
          alt="Иконка погоды"
        />
      </div>
    </div>

    <div class="p-2 text-lg text-slate-400">
      <div>
        Местное время: <span>{{ weatherData.location?.localtime.slice(11) }}</span>
      </div>
      <div>{{ weatherData.location?.name }}</div>
      <div>{{ weatherData.location?.country }}</div>
    </div>
  </div>
</template>
