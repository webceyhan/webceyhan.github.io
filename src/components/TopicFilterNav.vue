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
  <div>
    <h5>Topics</h5>

    <nav class="nav nav-pills gap-2">
      <a
        v-for="(topic, i) in topics"
        :key="i"
        href="#"
        @click.prevent="onToggle(topic)"
        class="nav-link rounded-pill bg-dark bg-opacity-50 fs-7 p-1 px-2"
        :class="{ active: topic === modelValue }"
        >{{ topic }}</a
      >
    </nav>
  </div>
</template>
