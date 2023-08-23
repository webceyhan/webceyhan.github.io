<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<template>
  <span class="countdown font-mono">
    <span :style="{ '--value': value }" />
  </span>
</template>
