<script setup lang="ts">
import { Variant } from "types/ui";

defineProps<{
  label?: string;
  variant?: Variant;
  outlined?: boolean;
}>();
</script>

<template>
  <span
    :class="{
      badge: true,
      'badge-primary': variant === 'primary',
      'badge-secondary': variant === 'secondary',
      'badge-neutral': variant === 'neutral',
      'badge-accent': variant === 'accent',
      'badge-ghost': variant === 'ghost',
      'badge-outline': outlined,
    }"
  >
    <slot> {{ label }} </slot>
  </span>
</template>
