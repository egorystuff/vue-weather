<script setup lang="ts">
import { IconName } from '@/types'
import BaseIcon from './BaseIcon.vue'
import TheSearch from './TheSearch.vue'

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
        class="cursor-pointer w-8 h-8 hover:scale-110 transition"
        :name="IconName.CHANGE_THEME"
      />

      <TheSearch />
    </div>
  </header>
</template>
