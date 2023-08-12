<script setup>
import Button from "./Button.vue";
import Icon from "./Icon.vue";
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
    <h5 class="text-xl">Languages</h5>

    <progress-bar class="my-3" :items="languages" />

    <nav class="flex flex-wrap gap-2">
      <Button
        v-for="({ name, rate, color }, i) in languages"
        :key="name"
        :active="name === modelValue"
        @click="onToggle(name)"
        variant="ghost"
        small
      >
        <Icon class="me-1" name="box" :style="{ color }" />
        {{ name }}
      </Button>
    </nav>
  </div>
</template>
