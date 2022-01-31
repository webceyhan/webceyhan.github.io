<script setup>

import { ref, onMounted } from 'vue';
import { createGithubAPI } from './api/github';
import RepositoryList from './components/RepositoryList.vue'
import SocialLinkNav from './components/SocialLinkNav.vue'
import Profile from './components/Profile.vue';

const api = createGithubAPI();
const profile = ref({});
const repos = ref([]);
const socialLinks = ref([]);

onMounted(async () => {
    // load api sources
    profile.value = await api.getProfile();
    repos.value = await api.getRepositories({ sort: 'updated' });
    socialLinks.value = await api.getSocialLinks();
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
    <main class="py-5 px-md-5">
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
