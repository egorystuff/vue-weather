<script setup lang="ts">
import { INDICATORS } from '../assets/icons/icons'
import type { Indicators } from '../types'

defineProps<{ name: Indicators }>()
</script>

<template>
  <svg :class="$attrs.class || 'w-20 h-20'" v-html="INDICATORS[name]"></svg>
</template>
