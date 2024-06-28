<script setup lang="ts">
import TheHidden from '@/components/TheHidden.vue'
import ThePopupContent from '@/components/ThePopupContent.vue'
</script>

<template>
  <div>
    <Transition
      appear
      enter-active-class="ease-out duration-1000"
      enter-from-class="opacity-0"
      enter-to-class=" opacity-100"
      leave-active-class="ease-in duration-1000"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ThePopupContent />
    </Transition>

    <Transition
      appear
      enter-active-class="ease-out duration-1000"
      enter-from-class="opacity-0"
      enter-to-class=" opacity-100"
      leave-active-class="ease-in duration-1000"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <TheHidden />
    </Transition>
  </div>
</template>
