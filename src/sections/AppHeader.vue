<script setup>
import { ref } from "vue";
import { useProfile } from "@/store/profile";
import Loader from "@/components/Loader.vue";
import Avatar from "@/components/Avatar.vue";

const showLogo = ref(true);

const { profile, loading } = useProfile();
</script>

<template>
  <header class="hero min-h-screen" :class="$style.cover">
    <!-- <div class="hero-overlay bg-opacity-60"></div> -->
    <div class="hero-content text-center md:text-left text-neutral-content">
      <Loader v-if="loading" ring class="w-52" />

      <div v-else class="flex flex-col md:flex-row items-center">
        <div class="max-w-lg p-5 md:px-20">
          <Avatar :url="profile.avatar_url" class="max-lg:w-52" />
        </div>

        <div class="w-full space-y-4">
          <!-- intro -->
          <h2 class="text-4xl lg:text-5xl text-neutral-content/60">Hello, I am</h2>
          <h1 class="text-5xl lg:text-7xl tracking-wide font-semibold">
            {{ profile.name }}
          </h1>

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
      </div>
    </div>
  </header>
</template>

<style module>
.cover {
  background-image: url("../assets/bg-header.jpg");
  background-position: bottom !important;
  background-repeat: no-repeat !important;
  overflow: hidden;
}
</style>
