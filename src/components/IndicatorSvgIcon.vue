<script setup lang="ts">
import { INDICATORS } from '../assets/icons/icons'
import type { IndicatorsType } from '../types'

const props = defineProps<{ name: IndicatorsType }>()
</script>

<template>
  <svg :class="$attrs.class || 'w-4 h-4'" v-html="INDICATORS[props.name]"></svg>
</template>
