<script setup>

import { useSocial } from '../store/social';
import SocialLinkNav from '../components/SocialLinkNav.vue'

const { links } = useSocial();

</script>

<template>
    <footer>
        <div class="container">
            <social-link-nav :links="links" />
        </div>
    </footer>
</template>
