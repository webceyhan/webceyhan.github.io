<script setup lang="ts">
interface Props {
  large?: boolean;
  //   medium: boolean; // default
  small?: boolean;
}

defineProps<Props>();
</script>

<template>
  <h1
    :class="{
      'text-5xl': large,
      'text-2xl': !large && !small,
      'text-xl': small,
    }"
  >
    <slot />
  </h1>
</template>
