<script setup>
defineProps({
  languages: Array,
});

// filter significant languages that has rate >= 1
const filterSignificant = (languages) => {
  const filtered = languages.filter((lang) => lang.rate >= 1);
  return filtered.sort((a, b) => b.rate - a.rate);
};
</script>

<template>
  <div class="flex flex-wrap gap-y-2 gap-x-4 text-xs lg:text-sm lg:font-semibold">
    <span v-for="({ name, color, rate }, i) in filterSignificant(languages)" :key="i">
      <Icon name="box" class="mr-2" :style="{ color }" />
      <span class="mr-1">{{ name }}</span>
      <span class="opacity-50">{{ rate }}%</span>
    </span>
  </div>
</template>
