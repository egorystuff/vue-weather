<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import TheSearchInput from './TheSearchInput.vue'
import TheSearchResult from './TheSearchResult.vue'

const cityItems: string[] = [
  'London',
  'Minsk',
  'Berlin',
  'Moscow',
  'New York',
  'Mexico',
  'Istanbul',
  'Paris',
  'Detroit',
  'Pekin',
  'Tokyo',
  'Seoul',
  'Warsaw',
  'Vilnius'
]

const query: Ref<string> = ref('')
const isSearchResultsShown: Ref<boolean> = ref(false)

const results = computed(() => {
  if (!query.value) return []

  return cityItems.filter((city) =>
    city.toLowerCase().includes(query.value.toLowerCase().replace(/\s+/g, ' ').trim())
  )
})

const toggleSearchResults = (isSearchInputActive: boolean) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length > 0
}
</script>

<template>
  <div class="relative flex z-10">
    <TheSearchInput v-model:query="query" @change-state="toggleSearchResults" />
    <TheSearchResult v-show="isSearchResultsShown" :results="results" />
  </div>
</template>
