<script setup lang="ts">
interface Props {
  spinner?: boolean;
  dots?: boolean;
  ring?: boolean;
  ball?: boolean;
  bars?: boolean;
  infinity?: boolean;
  small?: boolean;
  // medium: boolean
  large?: boolean;
}

defineProps<Props>();
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
