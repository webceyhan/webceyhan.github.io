<script setup>
defineProps({
  title: String,
  compact: Boolean,
  imageAside: Boolean,
  imageOverlay: Boolean,
});
</script>

<template>
  <div
    :class="{
      card: true,
      compact: compact,
      'card-side': imageAside,
      'image-full': imageOverlay,
    }"
  >
    <figure v-if="$slots.image">
      <slot name="image" />
    </figure>

    <div class="w-full card-body">
      <!-- title -->
      <h2 v-if="title" class="card-title">{{ title }}</h2>

      <!-- content -->
      <slot />

      <!-- actions -->
      <div v-if="$slots.actions" class="card-actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
