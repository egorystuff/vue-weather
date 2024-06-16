<script setup lang="ts">
import { ICONS } from '../assets/icons/icons'
import type { IconName } from '../types'

defineProps<{ name: IconName }>()
</script>

<template>
  <svg :class="$attrs.class || 'w-20 h-20'" v-html="ICONS[name]"></svg>
</template>
