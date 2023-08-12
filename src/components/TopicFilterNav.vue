<script setup>
import Link from "./Link.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String,
  topics: Array,
});

const onToggle = (topic) => {
  const active = props.modelValue === topic;
  emit("update:modelValue", active ? null : topic);
};
</script>

<template>
  <div class="space-y-2">
    <h1 class="text-xl">Topics</h1>

    <nav class="flex flex-wrap gap-2">
      <Link
        v-for="(topic, i) in topics"
        :key="i"
        :label="topic"
        :active="topic === modelValue"
        @click="onToggle(topic)"
        variant="primary"
        hover
      />
    </nav>
  </div>
</template>
