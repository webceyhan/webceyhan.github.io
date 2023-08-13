<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <div class="join w-full h-1.5 bg-base-100 rounded-full">
    <div
      v-for="({ rate, color }, i) in items"
      :key="i"
      class="join-item h-1.5 rounded-full"
      :style="{ width: `${rate}%`, backgroundColor: color }"
    />
  </div>
</template>
