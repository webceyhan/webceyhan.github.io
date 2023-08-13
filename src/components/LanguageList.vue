<script setup>
import Badge from "./Badge.vue";
import Icon from "./Icon.vue";

defineProps({
  languages: Array,
});
</script>

<template>
  <!-- todo: find a clean way to make truncate work while fitting to container -->
  <div class="h-6 text-clip overflow-hidden space-x-1">
    <Badge
      v-for="({ name, color }, i) in languages"
      :key="i"
      variant="ghost"
      class="mb-3"
    >
      <Icon name="box" class="mr-2" :style="{ color }" />
      {{ name }}
    </Badge>
  </div>
</template>
