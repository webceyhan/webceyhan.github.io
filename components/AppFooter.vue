<script setup>
const { data: links } = useSocialLinks();
</script>

<template>
  <footer class="footer footer-center bg-neutral/30 text-neutral-content p-5">
    <div>
      <span class="footer-title">Social</span>
      <SocialNav :links="links" />
    </div>
  </footer>
</template>
