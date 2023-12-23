<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <span :class="`bi bi-${name}`" />
</template>
