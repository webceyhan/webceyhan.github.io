<script setup>
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
  <nav class="flex flex-wrap gap-1">
    <Button
      v-for="({ name }, i) in topics"
      :key="i"
      :label="name"
      :active="name === modelValue"
      @click="onToggle(name)"
      variant="primary"
      class="border-neutral-content/20 rounded-full lowercase"
      outline
      small
    />
  </nav>
</template>
