<script setup>
import Badge from "./Badge.vue";
import Icon from "./Icon.vue";

defineProps({
  languages: Array,
});
</script>

<template>
  <div class="max-w-md lg:max-w-xl truncate space-x-1">
    <Badge v-for="({ name, color }, i) in languages" :key="i" variant="ghost">
      <Icon name="box" class="mr-2" :style="{ color }" />
      {{ name }}
    </Badge>
  </div>
</template>
