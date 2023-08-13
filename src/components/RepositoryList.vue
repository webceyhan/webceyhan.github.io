<script setup>
import Repository from "./Repository.vue";

defineProps({
  repos: Array,
});
</script>

<template>
  <transition-group name="list" tag="div" class="space-y-4">
    <Repository v-for="repo in repos" :key="repo.id" :repo="repo" />
  </transition-group>
</template>

<style>
.list-enter-active {
  transition: all 300ms ease;
}
.list-leave-active {
  transition: all 200ms ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
