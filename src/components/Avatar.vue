<script setup>
defineProps({
  url: String,
});
</script>

<template>
  <div class="avatar">
    <div class="ring-8 ring-primary/20 ring-offset-base-100 ring-offset-2 rounded-full">
      <img :src="url" alt="avatar" />
    </div>
  </div>
</template>
