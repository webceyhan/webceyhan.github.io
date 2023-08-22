<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <span :class="`bi bi-${name}`" />
</template>
