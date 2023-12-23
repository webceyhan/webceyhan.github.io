<script setup lang="ts">
interface Props {
  topics?: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-wrap max-h-6 overflow-hidden gap-1">
    <Badge v-for="(topic, i) in topics" :key="i" :label="topic" />
  </div>
</template>
