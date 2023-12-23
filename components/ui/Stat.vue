<script setup lang="ts">
interface Props {
  label?: string;
  value?: string | number;
  desc?: string;
  icon?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="stat">
    <div v-if="icon" class="stat-figure mt-5">
      <Icon :name="icon" class="inline-block text-secondary text-3xl" />
    </div>

    <div v-if="label" class="stat-title">
      {{ label }}
    </div>

    <div v-if="value" class="stat-value">
      {{ value }}
    </div>

    <div v-if="desc" class="stat-desc">
      {{ desc }}
    </div>
  </div>
</template>
