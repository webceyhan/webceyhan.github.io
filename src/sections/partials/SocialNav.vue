<script setup>
import Icon from "../../components/Icon.vue";

defineProps({
  links: Array,
});
</script>

<template>
  <nav class="text-4xl space-x-6">
    <a
      v-for="(link, i) in links"
      :key="i"
      :href="link.url"
      class="link link-primary hover:text-neutral-content"
      target="__blank"
    >
      <Icon :name="link.icon" />
    </a>
  </nav>
</template>
