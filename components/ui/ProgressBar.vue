<script setup lang="ts">
import type { Item } from "~/types/ui";

interface Props {
  items: Item[];
  small?: boolean;
  //   medium: boolean; // default
  large?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="{
      'join w-full bg-base-100 rounded-full': true,
      'h-4': large,
      'h-2': !small && !large,
      'h-1': small,
    }"
  >
    <div
      v-for="({ rate, color }, i) in items"
      :key="i"
      :class="{
        'join-item rounded-full': true,
        'h-4': large,
        'h-2': !small && !large,
        'h-1': small,
      }"
      :style="{ width: `${rate}%`, backgroundColor: color }"
    />
  </div>
</template>
