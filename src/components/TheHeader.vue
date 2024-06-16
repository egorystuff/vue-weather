<script setup lang="ts">
import { IconName } from '@/types'
import BaseIcon from './BaseIcon.vue'
</script>

<template>
  <div>
    <div>
      <BaseIcon :name="IconName.LOGO_ICON" />
    </div>

    <div class="text-2xl">Vue Weather</div>
  </div>
  <div>right</div>
</template>
