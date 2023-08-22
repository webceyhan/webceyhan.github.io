<script setup lang="ts">
defineProps<{
  label: string;
  horizontal: boolean;
}>();
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
