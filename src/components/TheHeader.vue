<script setup lang="ts">
import { IconName } from '@/types'
import BaseIcon from './BaseIcon.vue'

defineEmits<{ (event: 'changeTheme'): void }>()
</script>

<template>
  <header class="flex justify-between items-center m-2">
    <div class="flex items-center gap-4 p-2 cursor-pointer">
      <BaseIcon viewBox="0 0 65 65" class="w-12 h-12" :name="IconName.LOGO_ICON" />
      <div class="text-primary text-xl uppercase font-bold">Vue Weather</div>
    </div>

    <div class="flex items-center gap-4 p-2">
      <BaseIcon
        @click="$emit('changeTheme')"
        viewBox="0 0 35 35"
        class="cursor-pointer w-8 h-8"
        :name="IconName.CHANGE_THEME"
      />
      <div>
        <select class="bg-component border-2 border-component py-2 px-4 rounded-xl outline-none">
          <option value="name">By name</option>
          <option value="price">By price (cheap)</option>
        </select>
      </div>
    </div>
  </header>
</template>
