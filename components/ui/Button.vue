<script setup lang="ts">
import type { Variant } from "~/types/ui";

interface Props {
  label?: string;
  variant?: Variant;
  outline?: boolean;
  active?: boolean;
  large?: boolean;
  small?: boolean;
  tiny?: boolean;
  micro?: boolean;
}

defineEmits(["click"]);

defineProps<Props>();
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
      'btn-xs !h-5 !min-h-min': micro,
    }"
    @click="$emit('click')"
  >
    <slot> {{ label }} </slot>
  </button>
</template>
