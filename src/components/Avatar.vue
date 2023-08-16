<script setup>
defineProps({
  url: String,
});
</script>

<template>
  <div class="avatar">
    <!-- bugfix: !aspect-auto added to the div to avoid the image being stretched on the first render -->
    <div
      class="ring-8 ring-primary/20 ring-offset-base-100 ring-offset-2 rounded-full !aspect-auto"
    >
      <img :src="url" alt="avatar" />
    </div>
  </div>
</template>
