<script setup lang="ts">
import type { Panel } from "~/types/ui";

const panels = ref<Panel[]>([]);

function collapseAll() {
  panels.value.forEach((panel) => {
    panel.open = false;
  });
}

provide("accordion", { panels, collapseAll });
</script>

<template>
  <div>
    <slot />
  </div>
</template>
