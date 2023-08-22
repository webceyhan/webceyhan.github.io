<script setup lang="ts">
import { Repo } from "server/types/repo";

defineProps<{
  repos: Repo[];
}>();
</script>

<template>
  <TransitionGroup
    tag="div"
    class="w-full flex flex-col gap-y-4"
    enter-active-class="transform-gpu"
    enter-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="absolute transform-gpu"
    leave-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <Repository
      v-for="repo in repos"
      :key="repo.id"
      :repo="repo"
      class="transition-all duration-300"
    />
  </TransitionGroup>
</template>
