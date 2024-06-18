<script setup lang="ts">
import { type Item } from '@/types'
import IndicatorSvgIcon from './IndicatorSvgIcon.vue'

const { item } = defineProps<{ item: Item }>()
</script>

<template>
  <div class="flex justify-start items-center p-2">
    <div class="mr-4 w-6">
      <IndicatorSvgIcon
        viewBox="0 0 25 25"
        class="bg-slate-100 p-1 rounded-full w-8 h-8 shadow-lg"
        :name="item.iconId"
      />
    </div>

    <div class="mr-4 w-40 text-lg">{{ item.name }}:</div>
    <div class="w-5/6 text-lg">{{ item.value }}</div>
  </div>
</template>
