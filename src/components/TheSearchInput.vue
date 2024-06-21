<script setup lang="ts">
import { ref, type Ref } from 'vue'
import debounce from 'lodash.debounce'

import { IconName } from '@/types'
import { fetchWeatherData } from '@/API/fetchWeatherData'

import BaseIcon from './BaseIcon.vue'

const city: Ref<string> = ref('')

const onChangeSearchInput = (event: any) => {
  event.preventDefault()
  city.value = event.target.value.trim()
  console.log(city.value)
  fetchWeatherData(city.value)
}
</script>

<template>
  <div class="relative">
    <BaseIcon
      viewBox="0 0 16 16"
      fill="none"
      class="absolute w-6 h-6 top-2 left-2"
      :name="IconName.SEARCH"
    />

    <form>
      <input
        @submit="onChangeSearchInput"
        class="bg-component border-2 text-text border-component py-2 px-4 pl-12 w-full rounded-xl outline-none"
        type="text"
        placeholder="Search city..."
      />
    </form>
  </div>
</template>
