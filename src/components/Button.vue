<script setup>
defineEmits(["click"]);

defineProps({
  label: String,
  variant: String,
  outline: Boolean,
  active: Boolean,
  large: Boolean,
  small: Boolean,
  tiny: Boolean,
});
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
