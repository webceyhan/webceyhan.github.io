<script setup>
import { computed, ref } from "vue";
import VueWriter from "vue-writer";
import { useProfile } from "@/store/profile";
import Loader from "@/components/Loader.vue";
import Avatar from "@/components/Avatar.vue";
import CoverUrl from "@/assets/bg-header.jpg";

const showLogo = ref(true);

const { profile, loading } = useProfile();

const titles = computed(() => {
  return [profile.value.bio, "Open Source Contributor", "Tech Enthusiast"];
});
</script>

<template>
  <header
    class="hero min-h-screen overflow-hidden bg-bottom"
    :style="{ backgroundImage: `url(${CoverUrl})` }"
  >
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

          <p class="text-xl lg:text-3xl">
            <!-- profession -->
            <VueWriter
              :array="titles"
              class="text-warning mb-2"
              :eraseSpeed="50"
              :typeSpeed="30"
            />

            <!-- location -->
            Based in {{ profile.location }},

            <!-- company -->
            working at
            <img
              v-if="showLogo"
              class="w-36 h-auto inline-block"
              src="@/assets/company-logo.png"
              @error="showLogo = false"
            />
            <span v-else class="text-nowrap">{{ profile.company }}</span>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
