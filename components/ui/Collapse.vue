<script setup lang="ts">
import type { AccordionInjection } from "~/types/ui";

interface Props {
  title: string;
  open?: boolean;
}

const props = defineProps<Props>();

const open = ref(props.open);

const { panels, collapseAll } = inject("accordion") as AccordionInjection;

panels.value.push({ open });

function toggle() {
  collapseAll();
  open.value = true;
}
</script>

<template>
  <details
    :open="open"
    class="collapse collapse-arrow"
    :class="{ 'bg-base-300/50': open }"
    @click.prevent="toggle()"
  >
    <summary class="collapse-title hover:bg-base-100/50">
      {{ title }}
    </summary>

    <div class="collapse-content p-2">
      <slot />
    </div>
  </details>
</template>
