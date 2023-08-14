<script setup>
import { loadSlim } from "tsparticles-slim";
import { options } from "./particles";
import AppFooter from "./sections/AppFooter.vue";
import AppHeader from "./sections/AppHeader.vue";
import AppProjects from "./sections/AppProjects.vue";

const particlesInit = async (engine) => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <div class="space-y-10">
    <AppHeader />

    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />

    <AppProjects />
    <AppFooter />
  </div>
</template>
