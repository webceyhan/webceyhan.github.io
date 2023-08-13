<script setup>
import Badge from "./Badge.vue";

defineProps({
  topics: Array,
});
</script>

<template>
  <div class="max-w-md lg:max-w-xl truncate space-x-1">
    <Badge v-for="(topic, i) in topics" :key="i" :label="topic" />
  </div>
</template>
