<script setup>
import { useSocial } from "../store/social";
import SocialNav from "./partials/SocialNav.vue";

const { links } = useSocial();
</script>

<template>
  <footer class="footer footer-center bg-neutral/30 text-neutral-content p-5">
    <div>
      <span class="footer-title">Social</span>
      <SocialNav :links="links" />
    </div>
  </footer>
</template>
