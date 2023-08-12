<script setup>
import { useSocial } from "../store/social";
import SocialLinkNav from "../components/SocialLinkNav.vue";

const { links } = useSocial();
</script>

<template>
  <footer class="footer footer-center bg-neutral text-neutral-content p-10">
    <div>
      <span class="footer-title">Social</span>
      <social-link-nav :links="links" />
    </div>
  </footer>
</template>
