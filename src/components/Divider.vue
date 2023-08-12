<script setup>
defineProps({
  label: String,
  horizontal: Boolean,
});
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
