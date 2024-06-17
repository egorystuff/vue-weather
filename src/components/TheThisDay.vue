<script setup lang="ts">
import { IconName } from '@/types'
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <div class="border border-slate-200 shadow-lg rounded-xl h-64 p-4 w-1/3 p-2 mr-2">
    <div class="flex justify-between items-center p-2">
      <div>
        <div class="text-6xl font-medium">20&deg;C</div>
        <div class="text-3xl">Сегодня</div>
      </div>
      <div>
        <BaseIcon viewBox="0 0 119 119" class="w-20 h-20" :name="IconName.SUN" />
      </div>
    </div>

    <div class="p-2 text-xl">
      <div>Время <span>21:54</span></div>
      <div>Минск</div>
    </div>
  </div>
</template>
