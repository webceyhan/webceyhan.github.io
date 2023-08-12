<script setup>
defineProps({
  spinner: Boolean,
  dots: Boolean,
  ring: Boolean,
  ball: Boolean,
  bars: Boolean,
  infinity: Boolean,
  small: Boolean,
  large: Boolean,
});
</script>

<template>
  <span
    :class="{
      loading: true,
      'loading-spinner': spinner,
      'loading-dots': dots,
      'loading-ring': ring,
      'loading-ball': ball,
      'loading-bars': bars,
      'loading-infinity': infinity,
      // size
      'loading-sm': small,
      'loading-md': !small && !large,
      'loading-lg': large,
    }"
  />
</template>
