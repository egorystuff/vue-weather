<script setup lang="ts">
import { type ItemType } from '@/types'
import IndicatorSvgIcon from './IndicatorSvgIcon.vue'

const { item } = defineProps<{ item: ItemType }>()
</script>

<template>
  <div class="flex justify-start items-center p-2">
    <div class="mr-4 w-6">
      <IndicatorSvgIcon
        :viewBox="item.boxView"
        class="bg-slate-100 p-1.5 rounded-full w-8 h-8 shadow-lg"
        :name="item.iconId"
      />
    </div>

    <div class="text-slate-400 mr-4 w-40 text-lg">{{ item.name }}:</div>
    <div class="text-text w-5/6 text-lg">{{ item.value }}</div>
  </div>
</template>
