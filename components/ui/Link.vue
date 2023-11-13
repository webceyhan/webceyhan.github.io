<script setup lang="ts">
import type { Variant } from "~/types/ui";

defineProps<{
  label?: string;
  variant?: Variant;
  active?: boolean;
  hover?: boolean;
}>();
</script>

<template>
  <a
    href="#"
    :class="{
      link: true,
      'link-primary': variant === 'primary' && !active,
      'link-secondary': variant === 'secondary' && !active,
      'link-neutral': variant === 'neutral' && !active,
      'link-accent': variant === 'accent' && !active,
      'link-hover': hover,
    }"
  >
    <slot> {{ label }} </slot>
  </a>
</template>
