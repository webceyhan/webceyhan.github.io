<script setup>
import Badge from "./Badge.vue";
import Icon from "./Icon.vue";
import ProgressBar from "./ProgressBar.vue";

defineProps({
  languages: Array,
});
</script>

<template>
  <div class="max-w-xl truncate space-x-2">
    <Badge v-for="({ name, color }, i) in languages" :key="i" variant="neutral">
      <Icon name="box" class="mr-2" :style="{ color }" />
      {{ name }}
    </Badge>
  </div>

  <ProgressBar :items="languages" class="my-2" />
</template>
