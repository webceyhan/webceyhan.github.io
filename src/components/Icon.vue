<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <span :class="`bi bi-${name}`" />
</template>
