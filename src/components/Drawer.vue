<script>
let count = 0;
</script>

<script setup>
import { ref } from "vue";
import Icon from "./Icon.vue";

defineProps({});

const isOpen = ref(false);
const id = `drawer-${count++}`;

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="drawer lg:drawer-open">
    <!-- toggle state -->
    <input :id="id" type="checkbox" class="drawer-toggle" v-model="isOpen" />

    <div class="drawer-content flex flex-col">
      <!-- toggle trigger button -->
      <slot name="trigger" v-bind="{ toggle }">
        <label :for="id" class="drawer-button btn btn-outline lg:hidden">
          <Icon name="list" />
        </label>
      </slot>

      <!-- Page content here -->
      <slot />
    </div>

    <div class="drawer-side">
      <label :for="id" class="drawer-overlay" />

      <aside
        :class="[
          'w-80 lg:w-96 h-full overflow-scroll p-4 lg:p-0 lg:pr-8 space-y-8',
          'bg-base-200 text-base-content',
        ]"
      >
        <slot name="sidebar" />
        <!-- Sidebar content here -->
      </aside>
    </div>
  </div>
</template>
