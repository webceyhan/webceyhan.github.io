<script setup>
import Link from "@/components/Link.vue";
import Icon from "@/components/Icon.vue";

defineProps({
  links: Array,
});
</script>

<template>
  <nav class="text-4xl space-x-6">
    <Link
      v-for="(link, i) in links"
      :key="i"
      :href="link.url"
      variant="primary"
      class="hover:text-neutral-content"
      target="__blank"
    >
      <Icon :name="link.icon" />
    </Link>
  </nav>
</template>
