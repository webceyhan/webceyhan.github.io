<script setup>
import Heading from "@/components/Heading.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";
import ProgressBar from "@/components/ProgressBar.vue";

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
  <div class="space-y-2">
    <Heading small> Languages </Heading>

    <progress-bar :items="languages" />

    <nav class="flex flex-wrap gap-1">
      <Button
        v-for="({ name, rate, color }, i) in languages"
        :key="name"
        :active="name === modelValue"
        @click="onToggle(name)"
        class="border-neutral-content/20"
        outline
        small
      >
        <Icon class="me-1" name="box" :style="{ color }" />
        {{ name }}
      </Button>
    </nav>
  </div>
</template>
