<script setup lang="ts">
import { Variant } from "types/ui";

defineEmits(["click"]);

defineProps<{
  label?: string;
  variant?: Variant;
  outline?: boolean;
  active?: boolean;
  large?: boolean;
  small?: boolean;
  tiny?: boolean;
}>();
</script>

<template>
  <button
    type="button"
    :class="{
      btn: true,
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-accent': variant === 'accent',
      'btn-ghost': variant === 'ghost',
      'btn-outline': outline,
      'btn-active': active,
      'btn-lg': large,
      'btn-sm': small,
      'btn-xs': tiny,
    }"
    @click="$emit('click')"
  >
    <slot> {{ label }} </slot>
  </button>
</template>
