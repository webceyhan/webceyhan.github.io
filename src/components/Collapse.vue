<script setup>
import { inject, ref } from "vue";

const props = defineProps({
  title: String,
  open: Boolean,
});

const open = ref(props.open);

const { panels, collapseAll } = inject("accordion");
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
    <summary
      class="collapse-title hover:bg-base-100/50"
    >
      {{ title }}
    </summary>

    <div class="collapse-content p-2">
      <slot />
    </div>
  </details>
</template>
