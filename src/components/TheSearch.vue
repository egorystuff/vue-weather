<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'
import TheSearchInput from './TheSearchInput.vue'
import TheSearchResult from './TheSearchResult.vue'
import { fetchWeatherData } from '@/API/fetchWeatherData'
import { cityItems } from '@/cityItems'

const { selectCity } = inject<any>('weatherData')

const query: Ref<string> = ref('')
const isSearchResultsShown: Ref<boolean> = ref(false)
const activeSearchResultId: Ref<number | null> = ref(null)
const results: Ref<string[]> = ref([])

const updateSearchResults = (): void => {
  if (query.value === '') {
    results.value = []
  } else {
    results.value = cityItems.filter((city) =>
      city.toLowerCase().includes(query.value.toLowerCase().replace(/\s+/g, ' ').trim())
    )
  }
}

const toggleSearchResults = (isSearchInputActive: boolean): void => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length > 0
}

const handlePrevSearchResult = (): void => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = results.value.length - 1
  } else if (activeSearchResultId.value === 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }

  updateSearchQuery()
}

const handleNextSearchResult = (): void => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = 0
  } else if (activeSearchResultId.value + 1 === results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }

  updateSearchQuery()
}

const updateSearchQuery = (): void => {
  if (activeSearchResultId.value !== null) {
    query.value = results.value[activeSearchResultId.value]
  }
}

const selectSearchResult = (searchResultId: number): void => {
  query.value = results.value[searchResultId]
  updateSearchResults()
  toggleSearchResults(false)
}

const handleShowCity = (): void => {
  if (query.value) {
    selectCity.value = query.value
    fetchWeatherData(query.value)
    toggleSearchResults(false)
    query.value = ''
    results.value = []
  }
}

const handleClick = (): void => {
  toggleSearchResults(false)
}

onMounted(() => {
  document.addEventListener('click', handleClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClick)
})
</script>

<template>
  <div class="relative flex z-10">
    <TheSearchInput
      v-model:query="query"
      @update:query="updateSearchResults"
      @change-state="toggleSearchResults"
      @keyup.up="handlePrevSearchResult"
      @keyup.down="handleNextSearchResult"
      @keydown.up.prevent
    />

    <button
      @click="handleShowCity"
      class="top-0 right-0 bg-primary text-text border-2 text-text border-primary w-24 rounded-r-xl outline-none hover:bg-primary/70 hover:border-primary/70 transition"
    >
      Показать
    </button>

    <TheSearchResult
      v-show="isSearchResultsShown"
      :results="results"
      :active-result-id="activeSearchResultId"
      @search-result-mouseenter="activeSearchResultId = $event"
      @search-result-mouseleave="activeSearchResultId = null"
      @search-result-click="selectSearchResult"
    />
  </div>
</template>
