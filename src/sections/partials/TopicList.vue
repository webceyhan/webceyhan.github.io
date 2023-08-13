<script setup>
import Badge from "../../components/Badge.vue";

defineProps({
  topics: Array,
});
</script>

<template>
  <!-- todo: find a clean way to make truncate work while fitting to container -->
  <div class="h-6 text-clip overflow-hidden space-x-1">
    <Badge v-for="(topic, i) in topics" :key="i" :label="topic" class="mb-3" />
  </div>
</template>
