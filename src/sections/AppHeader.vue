<script setup>
import { computed, ref } from "vue";
import VueWriter from "vue-writer";
import { timestamp } from "@/utils";
import { useProfile } from "@/store/profile";
import Loader from "@/components/Loader.vue";
import Avatar from "@/components/Avatar.vue";
import CoverUrl from "@/assets/bg-header.jpg";
import StatGroup from "@/components/StatGroup.vue";
import Stat from "@/components/Stat.vue";

const showLogo = ref(true);

const { profile, loading } = useProfile();

const titles = computed(() => {
  return [profile.value.bio, "Open Source Contributor", "Web3 & Blockchain Enthusiast"];
});
</script>

<template>
  <header
    class="hero min-h-screen overflow-hidden bg-bottom"
    :style="{ backgroundImage: `url(${CoverUrl})` }"
  >
    <!-- <div class="hero-overlay bg-opacity-60"></div> -->
    <div class="hero-content flex-col text-center md:text-left text-neutral-content">
      <Loader v-if="loading" ring class="w-52" />

      <template v-else>
        <div class="flex flex-col md:flex-row items-center">
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

        <StatGroup class="mt-20 max-md:hidden bg-opacity-50">
          <Stat label="Followers" :value="profile.followers" icon="person-down" />
          <Stat label="Following" :value="profile.following" icon="person-up" />
          <Stat label="Repositories" :value="profile.public_repos" icon="git" />
          <Stat label="Last Update" :value="timestamp(profile.updated_at)" />
        </StatGroup>
      </template>
    </div>
  </header>
</template>
