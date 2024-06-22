<script setup lang="ts">
defineProps<{ results: string[] }>()
</script>

<template>
  <div
    class="absolute top-full w-full bg-component border border-component shadow-md rounded-xl mt-2"
  >
    <ul>
      <li
        v-for="result in results"
        :key="result"
        class="hover:bg-gray-100 text-text px-3 py-1 select-none truncate"
      >
        {{ result }}
      </li>
    </ul>
    <a
      href="#"
      class="w-full inline-block text-right text-xs italic text-gray-500 hover:text-black pr-2"
      >Report search predictions</a
    >
  </div>
</template>
