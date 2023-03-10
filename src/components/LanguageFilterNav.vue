<script setup>
import ProgressBar from "./ProgressBar.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String,
  languages: Array,
});

const onToggle = (name) => {
  const active = props.modelValue === name;
  emit("update:modelValue", active ? null : name);
};
</script>

<template>
  <div>
    <h5>Languages</h5>

    <progress-bar class="my-3" :items="languages" />

    <nav class="nav nav-pills gap-2">
      <a
        v-for="({ name, rate, color }, i) in languages"
        :key="name"
        href="#"
        @click.prevent="onToggle(name)"
        class="nav-link bg-transparent border border-dark fs-7 p-1 px-2"
        :class="{ active: name === modelValue }"
      >
        <i class="bi bi-box me-1" :style="{ color }"></i>
        {{ name }}
      </a>
    </nav>
  </div>
</template>
