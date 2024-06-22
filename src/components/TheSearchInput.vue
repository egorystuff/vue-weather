<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { IconName } from '@/types'
import BaseIcon from './BaseIcon.vue'

// const city: Ref<string> = ref('')
const isActive: Ref<boolean> = ref(false)
const inputRef: Ref<HTMLInputElement | null> = ref(null)

defineProps<{ query: string }>()

const emit = defineEmits<{
  (event: 'update:query', value: string): void
  (event: 'change-state', state: boolean): void
}>()

const updateQuery = (value: any) => {
  emit('update:query', value)
  setState(value)
}

const setState = (state: boolean) => {
  isActive.value = state
  emit('change-state', state)
}

const handleEcs = () => {
  if (isActive.value) {
    setState(false)
  } else {
    inputRef.value?.blur()
  }
}

// const onChangeSearchInput = (event: any) => {
//   event.preventDefault()
//   city.value = event.target.value.trim()
//   console.log(city.value)
// }
</script>

<template>
  <div class="relative">
    <BaseIcon
      viewBox="0 0 16 16"
      fill="none"
      class="absolute w-6 h-6 top-2 left-2"
      :name="IconName.SEARCH"
    />

    <input
      @input="updateQuery(($event.target as HTMLInputElement).value)"
      @focus="setState(true)"
      @blur="setState(false)"
      @keyup.esc="handleEcs"
      @click="setState(true)"
      ref="inputRef"
      :value="query"
      class="bg-component border-2 text-text border-component py-2 px-4 pl-12 w-full rounded-xl outline-none"
      type="text"
      placeholder="Search city..."
    />

    <button v-show="query" @click="$emit('update:query', '')">
      <BaseIcon
        viewBox="0 0 18 18"
        fill="none"
        class="absolute w-5 h-5 top-3 right-2"
        :name="IconName.CLOSE"
      />
    </button>
  </div>
</template>
