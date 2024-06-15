<script setup lang="ts">
import icons from '../assets/icons/icons'
import type { IconName } from '../types'

defineProps<{ name: IconName }>()
</script>

<template>
  <component :is="icons[name]" :class="$attrs.class || 'h-5'" />
</template>
