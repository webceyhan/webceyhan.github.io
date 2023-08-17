<script setup>
defineProps({
  label: String,
  value: [String, Number],
  desc: String,
  icon: String,
});
</script>

<template>
  <div class="stat">
    <div v-if="$slots.figure || icon" class="stat-figure mt-5">
      <slot name="figure">
        <Icon :name="icon" class="inline-block text-secondary text-3xl" />
      </slot>
    </div>

    <div v-if="$slots.label || label" class="stat-title">
      <slot name="label">{{ label }}</slot>
    </div>

    <div v-if="$slots.value || value" class="stat-value">
      <slot name="value">{{ value }}</slot>
    </div>

    <div v-if="$slots.desc || desc" class="stat-desc">
      <slot name="desc">{{ desc }}</slot>
    </div>
  </div>
</template>
