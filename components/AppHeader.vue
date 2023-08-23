<script setup lang="ts">
// @ts-ignore
import VueWriter from "vue-writer";

const showLogo = ref(true);

const { data: profile } = await useFetch("/api/profile");

const titles = computed(() => profile.value?.bio.split(","));
</script>

<template>
  <header
    class="hero min-h-screen overflow-hidden bg-bottom"
    style="background-image: url(/img/bg-header.jpg)"
  >
    <!-- <div class="hero-overlay bg-opacity-60"></div> -->
    <div class="hero-content flex-col text-center md:text-left text-neutral-content">
      <Loader v-if="!profile" class="w-52" ring />

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

            <div class="text-xl lg:text-3xl">
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
                src="/img/company-logo.png"
                @error="showLogo = false"
              />
              <span v-else class="text-nowrap">{{ profile.company }}</span>
            </div>
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
composables/profile
