<script setup lang="ts">
interface Props {
  label?: string;
  horizontal?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="{
      divider: true,
      'divider-horizontal': horizontal,
    }"
  >
    <slot> {{ label }} </slot>
  </div>
</template>
