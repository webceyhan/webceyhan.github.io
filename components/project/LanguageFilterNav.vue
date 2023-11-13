<script setup lang="ts">
import type { Language } from "~/server/types/repo";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  modelValue: string | null;
  languages:  Language[];
}>();

const onToggle = (name: string) => {
  const active = props.modelValue === name;
  emit("update:modelValue", active ? null : name);
};
</script>

<template>
  <div class="space-y-2">
    <Heading small> Languages </Heading>

    <ProgressBar :items="(languages as any[])" />

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
