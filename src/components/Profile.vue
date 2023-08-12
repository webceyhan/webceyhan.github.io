<script setup>
import { ref } from "vue";
import Avatar from "./Avatar.vue";

const showLogo = ref(true);

defineProps({
  profile: Object,
});
</script>

<template>
  <div class="flex max-w-sm justify-center p-5 lg:p-10">
    <avatar :url="profile.avatar_url" class="max-lg:w-52" />
  </div>

  <div class="w-full space-y-4">
    <!-- intro -->
    <h2 class="text-4xl lg:text-5xl text-neutral-content/60">Hello, I am</h2>
    <h1 class="text-5xl lg:text-7xl tracking-wide font-semibold">{{ profile.name }}</h1>

    <p class="text-lg lg:text-2xl">
      <!-- profession -->
      I'm a <span class="text-warning text-nowrap">{{ profile.bio }}</span>

      <!-- location -->
      , based in {{ profile.location }}

      <br class="max-sm:hidden" />

      <!-- company -->
      and working as freelance at
      <img
        v-if="showLogo"
        src="../assets/company-logo.png"
        class="w-36 h-auto inline-block"
        @error="showLogo = false"
      />
      <span v-else class="text-nowrap">{{ profile.company }}</span>
    </p>
  </div>
</template>
