<script setup>
const panels = ref([]);

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
