<script setup>
import { useSocial } from "@/store/social";

const { links } = useSocial();
</script>

<template>
  <footer class="footer footer-center bg-neutral/30 text-neutral-content p-5">
    <div>
      <span class="footer-title">Social</span>
      <AppFooterSocialNav :links="links" />
    </div>
  </footer>
</template>
