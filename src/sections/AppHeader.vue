<script setup>
import { useProfile } from "../store/profile";
import Loader from "../components/Loader.vue";
import Profile from "../components/Profile.vue";

const { profile, loading } = useProfile();
</script>

<template>
  <header class="hero min-h-screen" :class="$style.cover">
    <!-- <div class="hero-overlay bg-opacity-60"></div> -->
    <div
      class="hero-content flex-col md:flex-row text-center md:text-left text-neutral-content"
    >
      <Loader v-if="loading" ring class="w-52" />

      <Profile v-else :profile="profile" />
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
