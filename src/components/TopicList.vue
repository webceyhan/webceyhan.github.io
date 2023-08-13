<script setup>
import Badge from "./Badge.vue";

defineProps({
  topics: Array,
});
</script>

<template>
  <div class="max-w-xl truncate">
    <Badge v-for="(topic, i) in topics" :key="i" :label="topic" />
  </div>
</template>
