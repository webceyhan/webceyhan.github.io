<script setup>
defineProps({
  large: Boolean,
  //   medium: Boolean, // default
  small: Boolean,
});
</script>

<template>
  <h1
    :class="{
      'text-4xl': large,
      'text-2xl': !large && !small,
      'text-xl': small,
    }"
  >
    <slot />
  </h1>
</template>
