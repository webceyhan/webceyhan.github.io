<script lang="ts">
let count = 0;
</script>

<script setup lang="ts">
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
          'w-80 h-full max-lg:overflow-y-scroll p-4 lg:p-0 lg:mr-8 space-y-8',
          'bg-base-300 text-base-content lg:bg-opacity-50',
        ]"
      >
        <slot name="sidebar" />
        <!-- Sidebar content here -->
      </aside>
    </div>
  </div>
</template>
