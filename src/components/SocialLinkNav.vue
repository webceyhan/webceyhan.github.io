<script setup>
defineProps({
  links: Array,
});
</script>

<template>
  <nav class="text-3xl space-x-6">
    <a
      v-for="(link, i) in links"
      :key="i"
      :href="link.url"
      class="link link-primary"
      target="__blank"
    >
      <i :class="`bi bi-${link.icon}`"></i>
    </a>
  </nav>
</template>
