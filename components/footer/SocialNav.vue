<script setup lang="ts">
// todo: this must be override default NuxtLink in config files
import Link from "@/components/ui/Link.vue";
import { SocialLink } from "@/server/types/social";

defineProps<{
  links: SocialLink[];
}>();
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
