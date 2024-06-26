<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'

const props = defineProps<{ results: string[]; activeResultId: number | null }>()

const itemClasses: ComputedRef<(id: number) => string[]> = computed(() => (id: number) => {
  return [id === props.activeResultId ? 'bg-card' : 'hover:bg-card', 'text-text', 'px-3', 'py-1']
})
</script>

<template>
  <div
    class="absolute top-full w-full bg-component border border-component shadow-md rounded-xl mt-2"
  >
    <ul v-auto-animate="{ duration: 40 }">
      <li
        v-for="(text, id) in results"
        :key="text"
        :class="itemClasses(id)"
        @mouseenter="$emit('search-result-mouseenter', id)"
        @mouseleave="$emit('search-result-mouseleave')"
        @click.stop="$emit('search-result-click', id)"
      >
        {{ text }}
      </li>
    </ul>
  </div>
</template>
