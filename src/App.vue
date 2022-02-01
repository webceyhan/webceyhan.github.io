<script setup>

import { ref, onMounted } from 'vue';
import * as github from './api/github';
import { getSocialLinks } from './api/social';
import RepositoryList from './components/RepositoryList.vue'
import SocialLinkNav from './components/SocialLinkNav.vue'
import Profile from './components/Profile.vue';

const profile = ref({});
const repos = ref([]);
const socialLinks = ref(getSocialLinks());

onMounted(async () => {
    // load api sources
    profile.value = await github.getProfile();
    repos.value = await github.getRepositories({ sort: 'updated' });
});

</script>

<template>
    <!-- Header -->
    <header class="py-5 px-md-5">
        <div class="container text-center text-sm-start text-light p-md-5">
            <profile :profile="profile" />
        </div>
    </header>

    <!-- Main Section -->
    <main class="py-3 px-md-5">
        <div class="container text-muted px-md-5">
            <repository-list :repos="repos" />
        </div>
    </main>

    <!-- Footer -->
    <footer class="py-5 px-md-5">
        <div class="container">
            <social-link-nav :links="socialLinks" />
        </div>
    </footer>
</template>

<style>
</style>
